import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainContainerComponent } from './main-container.component';
import { InputTextModule } from 'primeng/inputtext';
import { MTableModule } from 'src/app/shared/components/m-table/m-table.module';
import { TableModule } from 'primeng/table';
import { MainContainerRoutingModule } from './main-container-routing.module';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'src/app/shared/components/confirm-dialog/confirm-dialog.module';
@NgModule({
  declarations: [
    MainContainerComponent,
  ],
  imports: [
    FormsModule,
    MainContainerRoutingModule,
    InputTextModule,
    MTableModule,
    TableModule,
    CommonModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    ReactiveFormsModule

  ],
  exports: [MainContainerComponent]
})
export class MainContainerModule { }
