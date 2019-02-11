import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl: string = 'http://localhost:19746/api/customers/'
  constructor(private http: HttpClient) { }

  getAll(){
  return this.http.get(this.baseUrl);
  }
}
