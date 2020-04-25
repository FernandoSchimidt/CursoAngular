import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    firstName: 'Fernando',
    lastName: 'Schimidt',
    age: 50,
    address: 'route 100'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
