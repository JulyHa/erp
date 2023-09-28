import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citys: any = [
    {id: 1, code: '01', name: 'TP.Hà Nội', orderNumber: 1},
    {id: 2, code: '02', name: 'TP.Hồ Chí Minh', orderNumber: 2},
    {id: 3, code: '03', name: 'TP.Hồ Chí Minh', orderNumber: 3},
    {id: 4, code: '04', name: 'TP.Hồ Chí Minh', orderNumber: 4},
    {id: 5, code: '05', name: 'TP.Hồ Chí Minh', orderNumber: 5},
    {id: 6, code: '06', name: 'TP.Hồ Chí Minh', orderNumber: 6},
    {id: 7, code: '07', name: 'TP.Hồ Chí Minh', orderNumber: 7},
    {id: 8, code: '08', name: 'TP.Hồ Chí Minh', orderNumber: 8},
    {id: 9, code: '09', name: 'TP.Hồ Chí Minh', orderNumber: 9},
    {id: 1, code: '01', name: 'TP.Hà Nội', orderNumber: 1},
    {id: 2, code: '02', name: 'TP.Hồ Chí Minh', orderNumber: 2},
    {id: 3, code: '03', name: 'TP.Hồ Chí Minh', orderNumber: 3},
    {id: 4, code: '04', name: 'TP.Hồ Chí Minh', orderNumber: 4},
    {id: 5, code: '05', name: 'TP.Hồ Chí Minh', orderNumber: 5},
    {id: 6, code: '06', name: 'TP.Hồ Chí Minh', orderNumber: 6},
    {id: 7, code: '07', name: 'TP.Hồ Chí Minh', orderNumber: 7},
    {id: 8, code: '08', name: 'TP.Hồ Chí Minh', orderNumber: 8},
    {id: 9, code: '09', name: 'TP.Hồ Chí Minh', orderNumber: 9},
  ]

  constructor() { }

  getCitys(): any{
    return this.citys;
  }
  getId(): number{
    return this.citys.length > 0 ? this.citys[this.citys.length-1].id + 1: 1;
  }
  findIndexById(id: number): number{
    for(let i =0; i< this.citys.length; i++){
      if(id === this.citys[i].id){
        return i;
      }
    }
    return -1;
  }
  findById(id: number): any{
    for(let i = 0; i< this.citys.length; i++){
      if(id === this.citys[i].id){
        return this.citys[i];
      }
    }
    return null;
  }
  findByName(value: string){
    if(value === ''){
      return this.citys;
    }
    let str = [];
    for(let i =0; i< this.citys.length; i++){
      if(this.citys[i].name.includes(value)){
        str.push(this.citys[i]);
      }
    }
    console.log(this.citys);
    
    return str;
  }
  isExistName(value: string): boolean{
    for(let i =0; i< this.citys.length; i++){
      if(this.citys[i].name === (value)){
        return true;
      }
    }
    return false;
  }
  isExistCode(value: string): boolean{
    for(let i =0; i< this.citys.length; i++){
      if(this.citys[i].code === (value)){
        return true;
      }
    }
    return false;
  }
  add(newCity: any): boolean{
    let isExistName = this.isExistName(newCity.name);
    let isExistCode = this.isExistCode(newCity.name);
    if(isExistCode && isExistName){
      this.citys = [...this.citys, newCity];
      return true;
    }
    
    return false;
  }
  edit(id: number, editCity: any): boolean{
    let index = this.findById(id);
    if(index == -1){
      return false;
    }
    this.citys[index] = editCity;
    return true;
  }
  delete(id: number): boolean{
    let index = this.findById(id);
    if(index == -1){
      return false;
    }
    this.citys.remove(index, 1);
    return true;
  }

}
