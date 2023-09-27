import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DashboardComponent } from './dashboard.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    FormsModule,
    InputTextModule,
    BreadcrumbModule,
    
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
