import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId: String;
  password: String;

  constructor(private router: Router) {
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

  loginSubmit1(loginForm: any) {
    alert("loginForm executing...");
    console.log(loginForm);
    if (loginForm.loginId === 'HR' && loginForm.password === 'HR') {
      this.router.navigate(['hrpage']);
    } else {
      alert("Login failure");
    }
  }

}
