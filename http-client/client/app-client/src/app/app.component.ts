import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from './models/Product.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditProductComponent } from './dialog-edit-product/dialog-edit-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  simplerequestProductsObservable$: Observable<Product[]>;
  productsErrorHandling: Product[];
  productsLoading: Product[];
  bLoading: boolean = false;
  productsId: Product[];
  newlyProducts: Product[] = [];
  productsToDelete: Product[];
  productsToEdit: Product[];

  constructor(
    private producService: ProductsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  getSimpleHttpRequest() {
    this.simplerequestProductsObservable$ = this.producService.getProducts();

  }
  getProductsWithErrorHandlingOk() {

    this.producService.getProductsDelay()
      .subscribe(
        (prods) => {
          this.productsErrorHandling = prods;
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['snack_ok'];
          this.snackBar.open('Products successfuly loaded!', '', config);
        },
        (err) => {
          console.log(err);
        }
      )

  }
  getProductsWithErrorHandling() {
    this.producService.getProductsDelay()
      .subscribe(
        (prods) => {
          this.productsErrorHandling = prods;
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.panelClass = ['snack_ok'];
          this.snackBar.open('Products successfuly loaded!', '', config);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  getProductsLoading() {
    this.bLoading = true
    this.producService.getProductsDelay()
      .subscribe(
        (prods) => {
          this.productsLoading = prods;
          this.bLoading = false
        },
        (err) => {
          console.log(err)
          this.bLoading = false;
        }
      )
  }


  loadName(id: string) {
    this.producService.getProductName(id)
      .subscribe(name => {
        let index = this.productsId.findIndex(p => p._id === id);
        if (index >= 0) {
          this.productsId[index].name = name;
        }
      })
  }

  getProductsIds() {
    this.producService.getProductsIds()
      .subscribe((ids) => {
        this.productsId = ids.map(id => ({ _id: id, name: '', department: '', price: 0 }))
      })
  }


  saveProduct(name: string, department: string, price: number) {
    let p = { name, department, price };
    this.producService.saveProduct(p)
      .subscribe((p: Product) => {
        console.log(p);
        this.newlyProducts.push(p)
      },
        (err) => {
          console.log(err)
        })
  }
  loadProdyctsToDelete() {
    this.producService.getProducts()
      .subscribe((prods) => this.productsToDelete = prods);
  }

  deleteProduct(p: Product) {
    this.producService.deleteProduct(p)
      .subscribe((res) => {
        let i = this.productsToDelete.findIndex(prod => p._id == prod._id);
        if (i >= 0) {
          this.productsToDelete.splice(i, 1);
        }
      },
        (err) => {
          console.log(err);
        })
  }

  //edit
  loadProdyctsToEdit() {
    this.producService.getProducts()
      .subscribe((prods) => this.productsToEdit = prods);
  }
  editProduct(p: Product) {
    let newProduct: Product = { ...p };
    let dialogRef = this.dialog.open(DialogEditProductComponent, { width: '400px', data: newProduct })

    dialogRef.afterClosed()
      .subscribe((res: Product) => {
        if (res) {
          this.producService.editProduct(res)
            .subscribe((resp) => {
              //Recebe a resposta que editou
              let i = this.productsToEdit.findIndex(prod => p._id == prod._id);
              if (i >= 0)
                this.productsToEdit[i] = resp;
            }, (err) => console.error(err))
        }
      })

  }
}
