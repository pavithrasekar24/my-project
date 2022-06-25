import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
//Interpolation -{{}}
// ts bind-html display

// Variable
count:number=2;
counter:number=0;
name:string="Ureka";
age:number=24;
isApprove:boolean=true;
imageURL:string="assets/images/king.jpg";
imageClassName:string='king-img';
firstName:string="Joe";
lastName:string="Mark";

  constructor() { }

  ngOnInit(): void {
  }

  handleFirstName(event:any){
    console.log(event, event.target.value)
    // let value=event.target.value;
    //destructing
    let {value} =event.target;
    this.firstName=value;
  }

  handleCounter():void{
    console.log("handlecounter")
    this.counter=this.counter+1;
  }
}
