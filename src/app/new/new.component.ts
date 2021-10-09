import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  name: string;
  age: number;
  salary: number;
  isMarried: boolean;

  constructor() {
    // variables initialization
    this.name = "Reeha";
    this.age = 20;
    this.salary = 2000000;
    this.isMarried = false;
    console.log('This is a constructor!!');
   }// special method which executes automatically when object is created
   // dependency injection

  ngOnInit(): void {
    // init logic (fetching details)
    console.log('This is a ngOnInit!!');
  } // special method which executes specifically automatically as part of a life cycle of angular
  //@input

}
