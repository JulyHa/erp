import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit{
  visible: boolean = false;
  show: boolean = false;
  cols:any[] = [];
  citys : any;
  loading = false;

  constructor(private cityService: CityService){}

  ngOnInit(): void {
    this.citys = this.cityService.getCitys();
    console.log(this.cityService.findById(1));
    this.cols = [
      {field:'id', header:'Mã', isOpSort: false, iconSort : 0, width:'3rem'},
      {field:'name', header:'Tên tỉnh/thành phố', isOpSort: true, iconSort : 0, width:'12rem'},
  ]
    console.log("vào");
  
  }

  visibleDialog(){
    this.visible = true;
  }
  showConfirm(){
    this.show = true;
    console.log(this.show)
  }
  cancel(){
    this.visible = false;
  }
  submitCity(){

  }


}
