import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string='user';
  password:string='abc@123';

  constructor(private router:Router) { }

  handlePassword(event:any){
    this.password=event.target.value;
  }
  handleLogin(event:any){
  //  alert(this.userName+" login successfully")
  alert(`${this.userName} login successfully`);
//implement logic
  // this.router.navigateByUrl('/user');
  this.router.navigateByUrl('/user/employee');
  }
  ngOnInit() {
  }

}
