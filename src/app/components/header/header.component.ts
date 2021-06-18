import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Super Store';


  toggleProductLink = true;
  toggleCartLink = true;

  constructor() { }

  ngOnInit(): void {
  }

  // Change the "Products" link's color, font color and the header details when the "Product's link is clicked". 
  changeProductLinkColorAndHeaderContentOnClick(){
    if(this.toggleProductLink == false){
      return;
    }
    else{
      this.toggleCartLink = true;
      this.toggleProductLink = !this.toggleProductLink;
      this.title = "Super Store";
    }
  }

  // Change the "Cart" link's color, font color and the header details when the "Cart link is clicked".
  changeCartLinkColorAndHeaderContentOnClick(){
    if(this.toggleCartLink == false) {
      return;
    }
    else{
      this.toggleProductLink =!this.toggleProductLink;
      this.toggleCartLink = !this.toggleCartLink;
      this.title = "Super Store - Cart Details";
    }
  }
}
