import {CartItem} from "../models/cart-items.model";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class CartService{
  private restUrl = "http://localhost:2403/cartitems";
  //private cartData: CartItem[] = [];

  constructor(private cReq:Http){
  }

  getCartItems(){
    return this.cReq.get(this.restUrl);
  }

  addCartItem(item:CartItem){
    //console.log(item);
    return this.cReq.post(this.restUrl, item);
  }

  removeCartItem(id:string){
    return this.cReq.delete(this.restUrl + "/" + id);
  }
}
