import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  customerDetails:any[]=[
    {id:1,name:'rahul',age:23,gender:'M'},
    {id:2,name:'priya',age:21,gender:'F'},
    {id:3,name:'akshaya',age:25,gender:'M'},
    {id:4,name:'sakthi',age:26}
  ]

  // customerDetails:any[]=[];
  constructor() { }

  ngOnInit() {
  }

}
