import { Component, OnInit } from '@angular/core';
import { Departament } from '../departament';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.css']
})
export class DepartamentComponent implements OnInit {
  depName: string = ""
  departaments: Departament[] = [
    { name: "dep 1", _id: 'lslsls' },
    { name: "dep 1", _id: 'lslsls' },
    { name: "dep 1", _id: 'lslsls' },
    { name: "dep 1", _id: 'lslsls' },
    { name: "dep 1", _id: 'lslsls' },
    { name: "dep 1", _id: 'lslsls' },
    { name: "dep 1", _id: 'lslsls' },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  save() { }
  cancel() { }
  edit(dep: Departament) { }
  delete(dep: Departament) { }

}
