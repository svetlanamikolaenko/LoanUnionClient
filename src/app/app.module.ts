import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//services
import { CustomerService } from './customer.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatSelectModule, MatTableModule, MatToolbarModule, MatDialogModule, MatListModule} from '@angular/material';

//components
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';

//forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    FooterComponent,
    HeaderComponent,
    NewCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    //material design
    BrowserAnimationsModule, MatButtonModule, MatTableModule,
    MatInputModule, MatCardModule, MatSelectModule,
    MatToolbarModule,MatListModule,
    MatDialogModule,
    ReactiveFormsModule,FormsModule,
    AppRouterModule
  ],
  entryComponents:[UpdateCustomerComponent],
  providers: [CustomerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
