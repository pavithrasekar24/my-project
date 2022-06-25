import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  searchTerm:any ='';
  employees:any=[
    {
      id:1,
      firstname:"James",
      lastname:"s",
      salary:10000
    },
    {
      id:2,
      firstname:"John",
      lastname:"j",
      salary:12000
    },
    {
      id:3,
      firstname:"Smith",
      lastname:"t",
      salary:12000
    },
    {
      id:2,
      firstname:"Tom",
      lastname:"j",
      salary:12000
    },
    {
      id:2,
      firstname:"Jerry",
      lastname:"j",
      salary:12000
    }
  ]
  filteredEmployees:any=this.employees;

  arrName=["James","John","Jack","Smith"];
    constructor() { }

    ngOnInit(): void {
    }


   search(){
     //console.log('in search' + this.searchTerm)
     if(this.searchTerm=='')
     this.filteredEmployees=this.employees;
     else{
     this.filteredEmployees= this.employees.filter((emp:any)=>{
         //return emp.firstname.toLowerCase().match(this.searchTerm.toLowerCase())
        //return emp[e].toString().toLowerCase().match(this.searchTerm.toLowerCase())
       let fieldName=Object.keys(emp);
       console.log(fieldName);
      return fieldName.some((key:any)=>{
        console.log(emp[key])
        return emp[key].toString().toLowerCase().match(this.searchTerm.toLowerCase())
      })
      // return filterdata
      });
    }
  }
}
