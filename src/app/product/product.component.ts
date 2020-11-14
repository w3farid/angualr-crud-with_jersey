import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  isCreate = true;
  formTitle = 'Create New Product';
  formTitleEdit = 'Edit Product';
  product: Product;
  productList: Product[];
  constructor(private http : HttpClient) { 
    this.product = new Product(0, '', 0.0, 0);
  }

  ngOnInit(): void {
    this.getProdcutList();
  }

  saveProdcut() {
    this.http.post<Product>('http://localhost:8080/restapi-jersey/api/product/save', this.product)
    .subscribe(data => {
      console.log(data);
      
    });
  }

  updateProdcut() {
    this.http.put<Product>('http://localhost:8080/restapi-jersey/api/product/update', this.product)
    .subscribe(data => {
      console.log("update successful");
      
    });
  }

  getProdcutList() {
    this.http.get<Product[]>('http://localhost:8080/restapi-jersey/api/product/product-list')
    .subscribe(data => {
      this.productList = data;      
    });
  }

  edit(id) {
    this.http.get<Product>('http://localhost:8080/restapi-jersey/api/product/one/'+id)
    .subscribe(data => {
      this.product = data;  
      this.isCreate = false;    
    });
  }

  delete(id) {
    this.http.delete<any>('http://localhost:8080/restapi-jersey/api/product/delete/'+id)
    .subscribe(data => {
      console.log("Delete successful");
      
    });
  }

}
