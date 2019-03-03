import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customer ={
    firstName:'',
    lastName: '',
    fathersName:'',
    salary:0,
    email:'',
    phoneNumber:'',
    uniqueCode:0,
    passportNumber:'',
    passportGivenByWhom:'',
    passportGivenDate:Date,
    dateOfBirth:Date,
    scanCopy:'',
  }
  
  id;
  
  constructor(private route:ActivatedRoute,
              private service:CustomerService,
              private router:Router) { }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getCustomer(this.id).subscribe((data:any) => {
      console.log(data);
      this.customer.firstName = data.FirstName;
      this.customer.lastName = data.LastName;
      this.customer.salary = data.Salary;
      this.customer.uniqueCode = data.UniqueCode;
      this.customer.fathersName = data.FathersName;
      this.customer.dateOfBirth = data.DateOfBirth;
    })
  }
  
  cancel(){
    this.router.navigate(['/customers']);
  }

  confirm(){
    this.service.deleteCustomer(this.id).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/customers']);
    })
  } 
}

