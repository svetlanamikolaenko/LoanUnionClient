import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl: string = 'http://localhost:19746/api/customers/'
  constructor(private http: HttpClient) { }

  getAll(){
  return this.http.get(this.baseUrl);
  }

  createCustomer(customer){
    return this.http.post(this.baseUrl, customer);
  }
}
