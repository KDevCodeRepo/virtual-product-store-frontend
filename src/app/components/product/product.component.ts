import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-products';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product [] = [];
  selectedProduct? : Product;

  onSelect(product : Product): void {
    this.selectedProduct = product;
  }

  // Inject the ProductService into the constructor to fetch the Product data from the "mock-products.ts" file. The ProductService service is
  // implented in a way to fetch data from any backend API service. 
  constructor(private productService: ProductService) { }

  // Call the getProducts() method to fetch the Product details from the "mock-products.ts" file after the constructor is loaded. 
  ngOnInit(): void {
    this.getProducts();
  }

  // This method does the heavy work by calling the getProducts() method available in the ProductService service. 
  // subscribe is used for asynchronous support when working with other APIs. Here, each fetched Product object will be assigned to the 
  // product variable of type Product. 
  getProducts() : void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  // When the user clicks on the "Add to Cart" button, this function is called from the Component template. 
  // The method recieves the selected product from the template first. Then the method checks the local storage to see if there are existing
  // products added to the local storage. If there are, these objects will be converted to an Object. Then the informationo of the passed Product 
  // object are assinged to variables which will be added to the Cart object. This cart object will convert the Object into a JSON string 
  // using JSON.stringify, then this JSON string will be set to the Local Storage. 
  addToCart(product: Product) :void {
    let cart = JSON.parse(localStorage.getItem('cart')!);

    let productId = product.productId;
    let productName =  product.productName;
    let productDesc = product.productDesc;
    let productImageUrl = product.productImageUrl;
    let productPrice = product.productPrice;
    let productQuantity = 1;

    if(!cart) {
      cart = [];
    }

    // Find if the item is already in the cart.
    const itemIndexInCart = cart.findIndex((cartEntry:any) => cartEntry.productId === productId);

    if (itemIndexInCart !==-1){
      cart[itemIndexInCart].productQuantity++;
    }
    else{
      cart.push({
        productId,
        productName,
        productDesc,
        productImageUrl,
        productPrice,
        productQuantity
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
