import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  form:FormGroup;
  id:number;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateCustomerComponent>,
              @Inject(MAT_DIALOG_DATA){FirstName, LastName, FathersName,Email,PhoneNumber,PassportNumber,PassportGivenByWhom,PassportGivenDate,Salary,Id},
              private service:CustomerService) {

                this.id = Id;

                this.form = fb.group({
                  firstName: [FirstName, Validators.required],
                  lastName: [LastName, Validators.required],
                  fathersName: [FathersName, Validators.required],
                  email: [Email, Validators.required],
                  phoneNumber: [PhoneNumber, Validators.required],
                  passportNumber: [PassportNumber, Validators.required],
                  passportGivenByWhom: [PassportGivenByWhom, Validators.required],
                  passportGivenDate: [PassportGivenDate, Validators.required],
                  salary: [Salary, Validators.required],                                  
                })            
  }
 
  close(){
    this.dialogRef.close();
  }
  save(){
    this.form.value.id = this.id;
    this.service.updateCustomer(this.id, this.form.value).subscribe((data) => {
      console.log('Data: ', data);
    })
  }

  ngOnInit() {
  }

}
