import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  studentDetails:any[]=[
    {id:1,name:'rahul',age:23,gender:'M'},
    {id:2,name:'priya',age:21,gender:'F'},
    {id:3,name:'akshaya',age:25,gender:'M'},
    {id:4,name:'sakthi',age:26}
  ]
  // studentDetails:any[]=[];
  constructor() { }

  ngOnInit() {
    this.studentDetails.forEach((item,i)=>{
      console.log(item,item.name,i)
    })
  }

}
