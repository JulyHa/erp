import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
              path: '',
              loadChildren: () =>
                import('../main-container/main-container.module').then(
                  (m) => m.MainContainerModule
                )
            }
          ],
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class LayoutRoutingModule { }
