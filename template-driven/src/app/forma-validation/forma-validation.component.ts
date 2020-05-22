import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forma-validation',
  templateUrl: './forma-validation.component.html',
  styleUrls: ['./forma-validation.component.css']
})
export class FormaValidationComponent implements OnInit {

  client = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    birth: new Date(),
    street: '',
    state: '',
    city: '',
    phone1: '',
    phone2: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.client);
  }
}
