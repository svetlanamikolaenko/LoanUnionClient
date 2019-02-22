import {RouterModule, Routes} from  '@angular/router';

//component
import { CustomersComponent } from './customers/customers.component';
import { NgModule } from '@angular/core';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

//route
const routes: Routes = [
    {path:'', component: NewCustomerComponent },
    {path:'customers', component: CustomersComponent},
    {path:'new-customer', component: NewCustomerComponent},
    {path:'delete-customer/:id', component: DeleteCustomerComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}

