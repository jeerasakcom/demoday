import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {
    "email":"",
    "password":""
  }
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  sendLogin(){
    // alert("Hey Angular");
    if(this.userData.email == "admin@email.com" && this.userData.password == "1234")
    {
      // alert("Login Success");
      this.router.navigate(['backend']);
    }else{
      alert("Login Fail!!!");
    }
  }

}
