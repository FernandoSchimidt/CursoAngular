import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  displayedColumns = ['name', 'price', 'stock', 'operations'];

  productForm = this.fb.group({
    id: [undefined],
    name: ['', [Validators.required]],
    stock: [0, [Validators.required]],
    price: [0, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
  onSubmit() {
    let p: Product = this.productForm.value;
    if (!p.id) {
      this.addProduct(p);
    } else {
      this.editProduct(p);
    }
  }
  addProduct(p: Product) {
    this.productService.addProduct(p)
      .then(() => {
        this.snackBar.open('Product added.', 'OK', { duration: 2000 })
      })
      .catch((err) => {
        this.snackBar.open('Error on submiting the product', 'Ok', { duration: 2000 })
      })
  }
  editProduct(p: Product) {

  }
}
