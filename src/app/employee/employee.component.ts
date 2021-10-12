import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee1: any;
  employee2: any;
  employee3: any;
  employee4: any;
  employee5: any;

  constructor() {
    this.employee1 = {id: 1, name: "reeha", gender: 'F', salary: 800000000, DOJ: "12-10-2021", loginId: "reeha", password: "reeha"};
    this.employee2 = {id: 2, name: "reeha1", gender: 'M', salary: 8000000, DOJ: "10-10-2021", loginId: "reeha1", password: "reeha1"};
    this.employee3 = {id: 3, name: "reeha2", gender: 'F', salary: 8000, DOJ: "01-10-2021", loginId: "reeha2", password: "reeha2"};
    this.employee4 = {id: 4, name: "reeha3", gender: 'M', salary: 80000000000, DOJ: "09-10-2021", loginId: "reeha3", password: "reeha3"};
    this.employee5 = {id: 5, name: "reeha4", gender: 'F', salary: 80, DOJ: "21-10-2021", loginId: "reeha4", password: "reeha4"};
  }

  ngOnInit(): void {
  }

}
