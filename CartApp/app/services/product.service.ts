import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ProductService{
  private restUrl = "http://localhost:2403/wsproducts";
  //private productData:Product[] = [];

  constructor(private pReq:Http){

    /*this.productData = [
      new Product(1, "phone", 10000, "phone"),
      new Product(2, "tv", 11000, "tv"),
      new Product(3, "ac", 57000, "ac"),
      new Product(4, "Refrigerator", 12000, "refrigerator"),
      new Product(5, "Mixer", 8000, "Mixer"),
      new Product(6, "Washing Machine", 6000, "Washing Machine"),
      new Product(7, "phone2", 14000, "phone2"),
      new Product(8, "phone3", 3000, "phone3"),
      new Product(9, "phone4", 6999, "phone4"),
    ]*/
  }

  getProducts(){
    //return this.productData;
    return this.pReq.get(this.restUrl);
  }

  addNewProduct(item:Product){
    return this.pReq.post(this.restUrl, item);
  }

  deleteProduct(productId: string) {
    return this.pReq.delete(this.restUrl + "/" + productId);
  }
}
