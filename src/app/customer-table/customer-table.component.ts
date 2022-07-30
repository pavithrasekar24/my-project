import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer/customer.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  customerDetails:any[]=[
    // {id:1,name:'rahul',age:23,gender:'M'},
    // {id:2,name:'priya',age:21,gender:'F'},
    // {id:3,name:'akshaya',age:25,gender:'M'},
    // {id:4,name:'sakthi',age:26}
  ]

  // customerDetails:any[]=[];
  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit() {
    this.getCustomerDetails();
  }
  getCustomerDetails(){
    this.customerService.getDetails().subscribe(response=>{
       this.customerDetails=[...response]
      console.log(response)
    })
  }

  handleEdit(id:number){
   console.log("edit",id);
   this.router.navigate(["/user/customer"],{
    state:{
       id:id,
       isEdit:true,
    }
   })
  }

  handleDelete(name:string,id:number){
    console.log("delete",id);
    this.customerService.deleteDetailsById(id).subscribe(response=>{
      alert(name+" deleted succesfully");
      this.getCustomerDetails();
    })

  }

}
