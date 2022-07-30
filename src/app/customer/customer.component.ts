import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm!: FormGroup;
  submitted: boolean = false;
  id:number=0;
  isEdit:boolean=false;
  constructor(private customerService: CustomerService,private router:Router) {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),

    });
  }

  ngOnInit() {
    console.log(history,history?.state?.id);
    if(history?.state?.id){
      this.id=history?.state?.id;
      this.isEdit=history?.state?.isEdit;
      this.setFormDetails();
    }

  }

  setFormDetails(){
    this.customerService.getDetailsById(this.id).subscribe(response=>{
      this.customerForm.patchValue({...response});

      // this.customerForm.patchValue({
      //   name:response.customerName,
      //   age:response.customerAge
      // })

    })
  }
  get f() {
    return this.customerForm.controls;
  }

  handleSubmitResponse() {
    alert("saved successfully");
    this.router.navigateByUrl("/user/customer-table")
  }


  handleUpdateResponse() {
    alert("update successfully");
    this.router.navigateByUrl("/user/customer-table")
  }
  handleError() {
    console.log("failed")
  }


  handleSubmit(event: any) {
    event.preventDefault();
    this.submitted = true;
    console.log(this.customerForm.value);
    if (this.customerForm.valid) {
     if(this.isEdit){
       this.handleUpdate();
     }else{
       this.handleSave();
     }
    }
  }

  handleSave(){
    this.customerService.saveDetails(this.customerForm.value).subscribe({
      next: this.handleSubmitResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }


  handleUpdate(){
    this.customerService.updateDetails(this.customerForm.value,this.id).subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }
}

