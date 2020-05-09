import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from './models/Product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  simplerequestProductsObservable$: Observable<Product[]>;
  productsErrorHandling: Product[];
  constructor(private producService: ProductsService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  getSimpleHttpRequest() {
    this.simplerequestProductsObservable$ = this.producService.getProducts();

  }
  getProductsWithErrorHandlingOk() {
    this.producService.getProductsError()
      .subscribe((prods) => {
        this.productsErrorHandling = prods;
      },
        (err) => {
          console.log(err);
        }
      )
  }
  getProductsWithErrorHandling() {

  }
}
