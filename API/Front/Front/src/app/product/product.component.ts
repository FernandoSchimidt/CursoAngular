import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from '../department';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Product } from '../product';
import { DepartmentService } from '../department.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup = this.fb.group({
    _id: [null],
    name: ['', [Validators.required]],
    stock: [0, [Validators.required, Validators.minLength(0)]],
    price: [0, [Validators.required, Validators.minLength(0)]],
    departments: [[], [Validators.required]]
  });

  @ViewChild('form') form: NgForm;

  products: Product[] = [];
  departments: Department[] = [];

  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((prods) => this.products = prods);

    this.departmentService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((deps) => this.departments = deps);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe$.next();
  }
  save() {
    let data = this.productForm.value;
    if (data._id != null) {
      this.productService.update(data)
        .subscribe(
          (p) => this.notify("Product updated")
        );
      this.resetForm();
    } else {
      this.productService.add(data)
        .subscribe(
          (p) => this.notify("Product inserted")
        );
      this.resetForm();
    }
  }
  delete(prod: Product) {
    this.productService.del(prod)
      .subscribe(
        () => this.notify("Deleted"),
        (err) => {
          this.notify("Erro to delete")
          console.log(err)
        }
      )
  }
  edit(prod: Product) {
    this.productForm.setValue(prod);
  }
  notify(msg: string) {
    this.snackBar.open(msg, "Ok", { duration: 3000 })
  }
  resetForm() {
    //this.productForm.reset();
    this.form.resetForm();
  }
}
