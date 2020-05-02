import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { DepartmentService } from './department.service';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    { id: 1, name: 'Laptop', department_id: 4, price: 40, description: 'Laptop' },
    { id: 2, name: 'Shirt', department_id: 1, price: 10, description: 'Shirt Description' },
    { id: 3, name: 'Polo', department_id: 1, price: 50, description: 'Polo Description' },
    { id: 4, name: 'Mouse', department_id: 3, price: 40, description: 'Mouse Description' }
  ];

  private products: Product[] = [];
  private nextId: number;

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();


  constructor(private departmentService: DepartmentService) {

    for (let p of this.dataFromServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.id)
      });
      this.nextId = p.id + 1;
    }
  }

  getProduct(): Product[] {
    return this.products;
  }
  addProduct(p: Product) {
    let prod: Product = { id: this.nextId++, ...p };
    this.products.push(prod);
    this.onNewProduct.emit(prod)
  }
}
