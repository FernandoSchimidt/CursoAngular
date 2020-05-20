import { Component, OnInit } from '@angular/core';

interface Client {
  firstName: string;
  lastName: string;
  birth: Date;
  gender: string;
  street: string;
  city: string;
  state: string;
  phone1: string;
  phone2: string;
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  client: Client = {
    firstName: "", lastName: "", birth: new Date(), gender: "", state: "", street: "", city: "", phone1: "", phone2: ""
  }
  states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO",
    "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ",
    "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.client);

  }

}
