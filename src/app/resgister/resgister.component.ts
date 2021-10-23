import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent implements OnInit {

  user: any;
  loginId: any;
  password: any;

  constructor() {
    this.user = {
      empId: "",
      empName: "",
      gender: "",
      salary: "",
      doj: "",
      loginId: "",
      password: ""
    };
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.user);
  }

  loginSubmit(): void {
    // alert("Login credentials are submitted");
    if (this.loginId === 'HR' && this.password === 'HR') {
      alert(' Welcome to HR Home Page... ');
    } else {
      this.user.array.forEach((employee: any) => {
        if ((this.loginId === employee.email) && (this.password === employee.password)) {
          alert(' Welcome to Employee Home Page... ');
        } else {
          alert(' Login Failure');
        }
      });
    }
  }
}
