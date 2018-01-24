import {Component} from "@angular/core";
import {CartItem} from "../models/cart-items.model";
import {CartService} from "../services/cart.service";

@Component({
  selector: "cart-items",
  templateUrl: "./cartitem.component.html"
})

export class CartitemComponent{
  cartItem:CartItem[] = [];
  constructor(private cSvc:CartService){
    this.getUpdatedCartItems();
  }

  remove(index) {
    this.cSvc.removeCartItem(index);
  }

  totalAmount(){
    let tot = 0;
    for(let item of this.cartItem){
      tot += (item.quantity * item.price);
    }
    return tot;
  }

  private getUpdatedCartItems(){
    this.cSvc.getCartItems().subscribe(
      (data) => {
        console.log("Success", data);
        this.cartItem = data.json();
      },
      (err) => {
        console.log("Error", err);
      }
    );
  }
}
