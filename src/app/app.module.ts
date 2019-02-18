import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//services
import {CustomerService} from './customer.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatSelectModule, MatTableModule, MatToolbarModule, MatDialogModule, MatListModule} from '@angular/material';

import { NewCustomerComponent } from './new-customer/new-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

//forms
import {ReactiveFormsModule} from '@angular/forms';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    FooterComponent,
    HeaderComponent,
    NewCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    //material design
    BrowserAnimationsModule, MatButtonModule, MatTableModule,
    MatInputModule, MatCardModule, MatSelectModule,
    MatToolbarModule,MatListModule,
    MatDialogModule,
    AppRouterModule
  ],
  entryComponents:[UpdateCustomerComponent],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
