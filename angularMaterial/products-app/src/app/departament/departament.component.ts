import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.css']
})
export class DepartamentComponent implements OnInit {
  depName: string;
  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
  }
  save() {
    this.departmentService.addDepartament(
      { name: this.depName }

    )
    this.clear();
  }
  clear() {
    this.depName = ""
  }

}
