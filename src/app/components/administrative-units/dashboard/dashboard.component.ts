import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  constructor(){}

  ngOnInit() {
      this.items = [{ label: 'Quản lý đơn vị hành chính' }]
      this.home = { icon: 'pi pi-home', routerLink: '/' };  
  }

}
