import {Component} from "@angular/core";
import {Product} from "./models/product.model";
import {ProductService} from "./services/product.service";
import {LoginService} from "./services/login.service";
import {Router} from "@angular/router";

@Component({
  template:`
  <h3>Welcome Home</h3><br>
    Price is : {{price | currency:'INR' | lowercase}}<br>
    Current System Date : {{sysDate | date:'MM/dd/yyyy'}}<br>
    Product Name: {{productName | titlecase | reverse:'words'}}<br>
    Product Name: {{productName | titlecase | reverse}}
  `
})
export class HomeComponent{
  price = 100.12345;
  sysDate = new Date();
  productName = "sony tv";
}

@Component({
  template:`
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 well">
          <product-list></product-list>
        </div>
        <div class="col-sm-6 well">
          <cart-items></cart-items>
        </div>
      </div>
    </div>
  `
})
export class ListComponent{

}

@Component({
  template:`
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 well">
          <cart-items></cart-items>
        </div>
      </div>
    </div>
  `
})
export class CartNavComponent{

}

@Component({
  templateUrl: "./manage.component.html"
})
export class ManageComponent{
  mgProducts:Product[] = [];
  formProduct:Product = new Product("", "", 0, "");

  constructor(private pSvc:ProductService){
    //this.mgProducts = pSvc.getProducts();
    this.getUpdatedProducts()
  }

  saveProduct(){
    this.pSvc.addNewProduct(this.formProduct).subscribe(
      (data) => {
        console.log("Success");
        this.mgProducts.push(data.json());
    },
      (err) =>{
        console.log("Error", err);
      });
    this.formProduct = new Product("", "", 0, "");
  }

  editProduct(editedProduct: Product){
    //this.formProduct = editedProduct;
    //Cloning object
    Object.assign(this.formProduct, editedProduct);

  }

  removeProduct(id:string, idx:number){
    this.pSvc.deleteProduct(id).subscribe(
      (data) => {
        console.log("Success");
        this.mgProducts.splice(idx, 1);
      },
      (err) =>{
        console.log("Error", err);
      });
  }

  private getUpdatedProducts(){
    this.pSvc.getProducts().subscribe(
      (data) => {
        console.log("Success", data);
        this.mgProducts = data.json();
      },
      (err) => {
        console.log("Error", err);
      }
    );
  }
}

@Component({
  template:`
  <h3>Log In View</h3>
    <form class="well" #f>
      User Name: <input type="text" name="txtUserName" #frmUName>
      Password  : <input type="password" name="txtPswd" #frmPswd><br/>
      <button class="btn btn-primary" (click)="doLogin(frmUName.value, frmPswd.value)">Log In</button>
    </form>
  `
})
export class LogInComponent{

  constructor(private loginSvc: LoginService, private router: Router){}
  doLogin(userName:string, password:string){
    console.log(userName, password);
    if (this.loginSvc.isValidUser(userName, password))
    {
      this.router.navigate(['/manage'])
    }
    else {
      this.router.navigate(['/unauth'])
    }
  }
}

@Component({
  template:`
  <h3 class="well">You have Logged Out...</h3>
  `
})
export class LogOutComponent{
}

@Component({
  template:`
  <h3 class="well">Invalid Credentials, Please try again...</h3>
  `
})
export class UnAuthComponent{}

@Component({
  template:`
  <h1 class="well">404. Not Found.....</h1>
  `
})
export class NotFoundComponent{

}

