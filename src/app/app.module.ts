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


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
