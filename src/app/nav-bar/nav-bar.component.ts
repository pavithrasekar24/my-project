import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   navBarDetails:any[]=[
     {id:1,path:'employee',label:'Employee'},
     {id:2,path:'/login',label:'Login'},
     {id:3,path:'customer',label:'Customer'},
     {id:4,path:'student',label:'Student'},
     {id:5,path:'student-table',label:'Student Table'},
     {id:6,path:'employee',label:'Employee'},
     {id:7,path:'add-event',label:'Event'},
     {id:8,path:'directive-types',label:'Directive types'},
     {id:8,path:'pipe-types',label:'Pipe types'}



   ]
  constructor() { }

  ngOnInit() {
  }

}
