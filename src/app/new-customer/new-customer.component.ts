import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Type } from '../interfaces/Type';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent  {
  types: Type[] = [
    {value: true, display: 'Yes'},
    {value: false, display: 'No'},

  ]

  constructor(private service: CustomerService) { }
customerForm = new FormGroup({
  // id: new FormControl('', [Validators.required, Validators.pattern('\\d+\\.?\\d*')]),
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  fathersName: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  phoneNumber: new FormControl('', Validators.required),
  uniqueCode: new FormControl('', Validators.required),
  passportNumber: new FormControl('', Validators.required),
  passportGivenByWhom: new FormControl('', Validators.required),
  passportGivenDate: new FormControl('', Validators.required),
  dateOfBirth: new FormControl('', Validators.required),
  scanCopy: new FormControl('', Validators.required),
  salary: new FormControl('', [Validators.required, Validators.pattern('\\d+\\.?\\d*')])
})

onSubmit(){
  console.log(this.customerForm.value);
  this.service.createCustomer(this.customerForm.value).subscribe((data) =>
  {console.log('Data - ', data);
})
}

}


