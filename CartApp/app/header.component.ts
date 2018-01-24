import {Component} from "@angular/core";
import {LoginService} from "./services/login.service";

@Component({
  selector: "app-header",
  template: `
    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <a href="#" class="navbar-brand">{{cmpHeading}}</a> 
      </div>
      <ul class="nav navbar-nav">
        <li><a routerLink="/">Home</a> </li>
        <li><a routerLink="/list">Shopping List</a> </li>
        <li><a routerLink="/cart">Shopping Cart</a> </li>
        <li *ngIf="isAdminLoggedIn()"><a routerLink="/manage">Manage Products</a> </li>
        <li *ngIf="!isAdminLoggedIn()"><a routerLink="/login">LogIn</a> </li>
        <li *ngIf="isAdminLoggedIn()"><a routerLink="/logout" (click)="doLogOut()">LogOut</a> </li>
      </ul>
    </nav>
  `
})
export class HeaderComponent{
  cmpHeading: string = "My Shopping Application";

  constructor(private lSvc:LoginService){
  }

  isAdminLoggedIn(){
    return this.lSvc.getIsLoggedIn();
  }

  doLogOut(){
    this.lSvc.setIsLoggedIn(false);
  }
}
