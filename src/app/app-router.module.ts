import {RouterModule, Routes} from  '@angular/router';

//component
import {CustomersComponent} from './customers/customers.component';
import { NgModule } from '@angular/core';

//route
const routes: Routes = [
    {path:'', component: CustomersComponent },
    {path:'customers', component: CustomersComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}

