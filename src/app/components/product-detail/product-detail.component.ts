import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product?: Product;
  @Output() removeItem = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  // This function is called from the component template when a user clicks the "Remove" button. This method will make an emit call to the 
  // parent component CartItem component via the removeItem property and passes the product object to be deleted to the parent component, which
  // will trigger and remove the selected product object from the local storage, hence the Cart as well. In addition, the product variable
  // will be cleared as well stopping the ProductDetailComponent from displaying the details of the selected product. 
  removeItemFromCart(product: any){
    this.removeItem.emit(product);
    delete this.product;
  }
}
