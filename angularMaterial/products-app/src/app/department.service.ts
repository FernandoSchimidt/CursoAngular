import { Injectable } from '@angular/core';
import { Department } from './models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departaments: Department[] = [
    { id: 1, name: 'Clothing' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Eletronics' },
    { id: 4, name: 'Computers' }
  ];
  private nextId: number = 5;
  constructor() { }

  getDepartments(): Department[] {
    return this.departaments;
  }
  addDepartament(d: Department) {
    this.departaments.push({ ...d, id: this.nextId++ });
    console.log(this.departaments)
  }
}
