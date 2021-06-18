import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from '../mock-products';
import { Product } from '../models/Product';

// The service implemented to fetch the Product details from external APIs. Currently the getProducts function sources data from the PRODUCTS
// mock object which has the relevant Product mock data. The Observable class will support asynchronous operations that occurs when an application
// works with an API. The Observable class will emit the array of products where the "subscribe" method in the ProductComponent will pass the emitted
// array to the callback, which is used to set the products property.

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product []> {
    const products = of(PRODUCTS);
    return products;
  }
}
