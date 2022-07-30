import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {
   userName:string='aDmiN';
   surname:string='Mr';
   amount:number=6789569;
   searchName:string='';
   userNames:any=[{id:1,username:'Ajay'},
   {id:2,username:'Vijaya'},{id:3,username:'Rubini'}];

   student:any=[{id:1,name:'abc'},{id:2,name:'xyz'}]

   dob:Date=new Date();
  constructor() { }

  ngOnInit() {
  }

}
