import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

//serveces
import {CustomerService} from './customer.service';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
