import {RouterModule, Routes} from  '@angular/router';

//component
import {CustomersComponent} from './customers/customers.component';
import { NgModule } from '@angular/core';
import { NewCustomerComponent } from './new-customer/new-customer.component';

//route
const routes: Routes = [
    {path:'', component: NewCustomerComponent },
    {path:'customers', component: CustomersComponent},
    {path:'new-customer', component: NewCustomerComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}

