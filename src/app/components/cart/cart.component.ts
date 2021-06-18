import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Holds the cart items sourced by the local storage, which were added by the user from the Products page. This variable is set in the
  // ngOnInit method below.
  cartItems: any[] = [];
  selectedProduct? : any;
  cartTotal: number = 0;
  cartEmpty: boolean = true;

  constructor() { }

  // Source the values from the local storage and initialize the declared variables. 
  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem("cart")!);
    this.cartTotal = this.calculateCartTotal();

    if(this.cartTotal > 0){
      this.cartEmpty = false;
    }
  }

  // The cart item object the user clicks on, which will be shown in the right panel is assinged to the "selectedProduct" variable in this function.
  // Then "selectedProduct" variable will be passed to the ProductDetailComponent (child component) to display the product information. 
  onSelect(cartItem : any): void {
    this.selectedProduct = cartItem;
  }

  // Calculate the total price of all the selected items. 
  calculateCartTotal () {
    var total = 0;
    for(let i in this.cartItems){
      var itemPrice: number = +this.cartItems[i].productPrice;
      var itemQuantity: number = +this.cartItems[i].productQuantity;
      
      total = total + (itemPrice * itemQuantity);
    }
    console.log(total);
    return total;
  }

  // Remove the item from the cart when a user clicks on the "Remove" button available per item, which is displayed when a user 
  // clicks on an item available in the cart.
  removeItemFromCart(product: any){
    console.log(product.productName);
    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.productId){
        this.cartItems.splice(+i, 1);
      }
      if(this.cartItems.length === 0){
        this.cartEmpty = true;
      }
      else{
        this.cartEmpty = false;
      }
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
    this.cartTotal = this.calculateCartTotal()
    }
  }



}
