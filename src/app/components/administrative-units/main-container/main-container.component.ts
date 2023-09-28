import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  visible: boolean = false;
  show: boolean = false;
  cols: any[] = [];
  citys: any;
  loading = false;
  valueSearch: string = ''
  citysForm: FormGroup;
  isEditUser: boolean = false;
  userDialogHeader: string = ''
  currentItem: any;

  constructor(private cityService: CityService, private fb: FormBuilder,) {
    this.citysForm = this.fb.group({
      id: [null],
      code: [null, Validators.required],
      name: [null, Validators.required],
      orderNumber: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.citys = this.cityService.getCitys();
    console.log(this.cityService.findById(1));
    this.cols = [
      { field: 'id', header: 'STT', isOpSort: false, iconSort: 0, width: '3rem' },
      { field: 'code', header: 'Mã', isOpSort: true, iconSort: 0, width: '3rem' },
      { field: 'name', header: 'Tên tỉnh/thành phố', isOpSort: false, iconSort: 0, width: '12rem' },
    ]
  }

  onCreatCity() {
    this.citysForm.patchValue({
      id: 0,
      code: '',
      name: '',
      orderNumber: ''

    });
    this.isEditUser = false;
    this.userDialogHeader = 'Thêm mới tỉnh/thành phố';
    this.visible = true;
  }
  usernameErrorMessage(form: FormGroup): string {
    const usernameControl = form.get('name');
    if (usernameControl && usernameControl.invalid && usernameControl.touched) {
      if (usernameControl.hasError('required')) {
        return '*Tên đăng nhập không được để trống';
      }
    }
    return '';
  }
  saveCitys() {
    if (this.citysForm.valid && !this.isEditUser) {
      this.createCity();    
    }
    else if(this.citysForm.valid && this.isEditUser){
      this.editCity();
    }
  }
  createCity(){
    const formValue = this.citysForm.value;
    const payload = {
      code: formValue.code,
      name: formValue.name,
      orderNumber: formValue.orderNumber
    };
    let res = this.cityService.add(payload)
    if(res){
      this.visible = false;
      this.searchCity();
      console.log("create true")
    }
    else{
      console.log("create false");
      
    }
   
  }
  onEditCity(item: any){
    this.currentItem = item;
    this.citysForm.patchValue({
      id: item.id,
      code: item.code,
      name: item.name,
      orderNumber: item.orderNumber,
    });
    this.visible = true;
    this.isEditUser = true;
    this.userDialogHeader = 'Chỉnh sửa tỉnh/thành phố';
  }
  editCity(){
    const formValue = this.citysForm.value;
    const payload = {
      id: formValue.id,
      code: formValue.code,
      name: formValue.name,
      orderNumber: formValue.orderNumber
    };
    let res = this.cityService.edit(payload.id, payload)
    if(res){
      this.visible = false;
      this.searchCity();
      console.log("edit true")
    }
    else{
      console.log("edit false");
      
    }
   
  }
  onDeleteCity(item: any){

  }

  showConfirm() {
    this.show = true;
    console.log(this.show)
  }
  cancel() {
    this.visible = false;
  }
  
  searchCity() {
    this.citys = this.cityService.findByName(this.valueSearch);
  }


}
