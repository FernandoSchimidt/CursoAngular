import { Component, OnInit } from '@angular/core';
import { Client } from '../input-binding/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public name: string;
  public age: number;
  public clients: Client[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push(
      { id: 0, name: this.name, age: this.age }
    );
    this.name = ""
    this.age = 0
  }
  deleteClient(i) {
    this.clients.splice(i, 1)
  }
  updateClient(c: Client, i) {
    this.clients[i].name = c.name;
    this.clients[i].age = c.age;
  }

}
