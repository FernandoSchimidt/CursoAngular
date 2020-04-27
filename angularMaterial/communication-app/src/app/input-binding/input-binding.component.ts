import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model'
@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
  // @Input('firstName') name: string;
  // @Input() lastName: string;
  // @Input() age: Number;

  clients: Client[];

  constructor() {
    this.clients = [
      { id: 1, name: "Fernando", age: 26 },
      { id: 1, name: "Ana", age: 24 },
      { id: 1, name: "John", age: 36 },
      { id: 1, name: "Maria", age: 18 }
    ]
  }

  ngOnInit(): void {
  }

}
