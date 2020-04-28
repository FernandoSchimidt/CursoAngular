import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/input-binding/client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  @Input() client: Client;
  @Output() updateClient = new EventEmitter<Client>();
  @Output() removeClient = new EventEmitter<any>();

  onEdit: boolean = false;
  name: string;
  age: number
  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.onEdit = true
    this.name = this.client.name;
    this.age = this.client.age;
  }
  remove() {
    this.removeClient.emit();
  }
  save() {
    this.onEdit = false
    this.updateClient.emit(
      { id: 0, name: this.name, age: this.age }
    )
  }
  cancel() {
    this.onEdit = false

  }

}
