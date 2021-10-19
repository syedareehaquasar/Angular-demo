import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent implements OnInit {

  employees: any;
  loginId: String;
  password: String;

  constructor() {
    this.loginId = "";
    this.password = "";
    this.employees = [

    ]
  }

  ngOnInit(): void {
  }

  loginSubmit(): void {
    // alert("Login credentials are submitted");
    if (this.loginId === 'HR' && this.password === 'HR') {
      alert(' Welcome to HR Home Page... ');
    } else {
      this.employees.array.forEach((employee: any) => {
        if ((this.loginId === employee.email) && (this.password === employee.password)) {
          alert(' Welcome to Employee Home Page... ');
        } else {
          alert(' Login Failure');
        }
      });
    }
  }
}
