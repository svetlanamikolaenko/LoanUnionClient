import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  [x: string]: any;
  baseUrl: string = 'http://localhost:19746/api/customers/'
  constructor(private http: HttpClient) { }

  getCustomer(id){
    return this.http.get(this.baseUrl+'/'+id);
  }

  getAll(){
  return this.http.get(this.baseUrl);
  }

  createCustomer(customer){
    return this.http.post(this.baseUrl, customer);
  }

  updateCustomer(id, customer){
    return this.http.put(this.baseUrl+'/'+id, customer);
  }

  deleteCustomer(id){
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
