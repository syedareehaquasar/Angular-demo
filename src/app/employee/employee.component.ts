import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  headers: any;
  employees: any;

  constructor() {
      this.headers = ["empId", "empName", "gender", "salary", "doj", "mobile", "country", "loginId", "password"];
      // Date should be in the format MM/DD/YYYY
      // new Date() will give the current date
      this.employees = [
        {"empId": 1, "empName": 'user1', "gender": 'Female', "salary": 100000.00, "doj": '03/07/2018', "mobile": '9897653241', "country": 'India', "loginId": 'user1', "password": 'user1'},
        {"empId": 2, "empName": 'user2', "gender": 'Male', "salary": 500000.00, "doj": '08/20/2021', "mobile": '5551234', "country": 'USA',"loginId": 'user2', "password": 'user2'},
        {"empId": 3, "empName": 'user3', "gender": 'Female', "salary": 600000.00, "doj": '11/01/2020', "mobile": '9786412277', "country": 'Pakistan',"loginId": 'user3', "password": 'user3'},
        {"empId": 4, "empName": 'user4', "gender": 'Female', "salary": 90000.00, "doj": new Date(), "mobile": '4578935112', "country": 'Africa',"loginId": 'user4', "password": 'user4'},
        {"empId": 5, "empName": 'user5', "gender": 'Male', "salary": 80000.00, "doj": '09/15/2016', "mobile": '785412368', "country": 'China',"loginId": 'user5', "password": 'user5'},
      ]
   }

  ngOnInit(): void {
  }

  objectKeys(args:any) {
    return Object.keys(args);
  }

}
