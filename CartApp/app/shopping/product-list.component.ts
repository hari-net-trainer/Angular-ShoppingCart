import {Component} from "@angular/core";
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {CartService} from "../services/cart.service";
import {CartItem} from "../models/cart-items.model";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html"
})

export class ProductListComponent{
  products:Product[] = [];

  constructor(private cSvc:CartService, private pSvc:ProductService){
    //this.products = this.ps.getProducts();
    pSvc.getProducts().subscribe(
      (data) => {
        console.log("Success", data);
        this.products = data.json();
      },
      (err) => {
        console.log("Error", err);
      }
    );
  }

  addToCart(selectedProduct: Product) {
    let orderItem:CartItem = new CartItem("", selectedProduct.name, selectedProduct.price, 1, selectedProduct.id);
    this.cSvc.addCartItem(orderItem).subscribe(
      (data) => {
        console.log("Success", data);
      },
      (err) => {
        console.log("Error", err);
      }
    )
  }
}
