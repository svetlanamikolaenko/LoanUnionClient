import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';
import { CustomerElement } from '../interfaces/CustomerElement';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['FirstName', 'LastName', 'DateOfBirth', 'Salary', 'Actions' ]
  dataSource;

  constructor(private service: CustomerService ) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<CustomerElement>(data as CustomerElement[])
    })
  
}
  updateCustomer(customer){
    console.log(customer);
  }
}

