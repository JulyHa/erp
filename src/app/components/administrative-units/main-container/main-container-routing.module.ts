import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container.component';

const routes = [
      {path: '', component: MainContainerComponent},
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainContainerRoutingModule { }
