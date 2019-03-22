import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { CustomerElement } from '../interfaces/CustomerElement';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['Id','FirstName', 'LastName', 'DateOfBirth', 'Salary', 'Actions' ]
  dataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private service: CustomerService, 
              private dialog:MatDialog ) { }


  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('Result - ', data);
      this.dataSource = new MatTableDataSource<CustomerElement>(data as CustomerElement[]);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  updateCustomer(customer){
    console.log(customer);
    this.dialog.open(UpdateCustomerComponent,
      {data:{
        Id:customer.Id,
        FirstName:customer.FirstName,
        LastName:customer.LastName,
        FathersName: customer.FathersName, 
        Email: customer.Email, 
        PhoneNumber: customer.PhoneNumber, 
        PassportNumber: customer.PassportNumber, 
        PasportGivenByWhom: customer.PasportGivenByWhom, 
        PassportGivenDate: customer.PassportGivenDate, 
        Salary: customer.Salary        
      }})
  }
}

