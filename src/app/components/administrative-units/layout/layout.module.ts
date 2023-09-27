import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MainContainerModule } from '../main-container/main-container.module';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    FormsModule,
    LayoutRoutingModule,
    DashboardModule,
    MainContainerModule,
    RouterModule,
    RouterModule,
    CommonModule,
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
