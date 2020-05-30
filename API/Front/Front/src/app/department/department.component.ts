import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  depName: string = '';
  departments: Department[] = [];
  private unsubscrire$: Subject<any> = new Subject();
  depEdit: Department = null;
  constructor(
    private departmentService: DepartmentService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.departmentService.get()
      .pipe(takeUntil(this.unsubscrire$))
      .subscribe((deps) => {
        this.departments = deps;
      })
  }
  save() {
    if (this.depEdit) {
      this.departmentService.update({ name: this.depName, id: this.depEdit.id })
        .subscribe(
          (dep) => {
            this.notify('Updated Successfully!')
          },
          (err) => {
            this.notify('Error Here');
            console.error(err);
          }
        )
    } else {
      this.departmentService.add({ name: this.depName })
        .subscribe((dep) => {
          console.log(dep);
          this.clearFields();
          this.notify('Department Inserted')
        }, (err) => {
          console.error(err);
        })
    }
  }
  clearFields() {
    this.depName = "";
    this.depEdit = null;
  }
  cancel() {

  }
  delete(dep: Department) {
    this.departmentService.del(dep)
      .subscribe(
        () => this.notify('Removed'),
        (err) => console.log(err)
      )
  }
  edit(dep: Department) {
    this.depName = dep.name;
    this.depEdit = dep;
  }

  notify(msg: string) {
    this.snackBar.open(msg, "Ok", { duration: 3000 });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscrire$.next();
  }
}
