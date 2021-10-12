import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  person : any;
  hobbies: any;
  message: string;

  constructor() {
    // variables initialization
    this.message = "";
    this.person = {name: "Reeha", age: 20, salary: 2000000, isMarried: false}
    this.hobbies = ["Singing", "Playing", "apple", 1];
    console.log('This is a constructor!!');
   }// special method which executes automatically when object is created
   // dependency injection

  ngOnInit(): void {
    // init logic (fetching details)
    console.log('This is a ngOnInit!!');
  } // special method which executes specifically automatically as part of a life cycle of angular
  //@input

}
