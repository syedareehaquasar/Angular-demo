import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId: String;
  password: String;

  constructor() {
    this.loginId = "";
    this.password = "";
   }

  ngOnInit(): void {
  }

  loginSubmit(): void {
    // alert("Login credentials are submitted");
    if (this.loginId === 'HR' && this.password === 'HR') {
      alert("Login success");
    } else {
      alert("Login failure");
    }
  }

}
