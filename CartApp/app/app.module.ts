import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header.component";
import {ShoppingModule} from "./shopping/shopping.module";
import {CartService} from "./services/cart.service";
import {
  CartNavComponent, HomeComponent, ListComponent, LogInComponent, LogOutComponent, ManageComponent,
  NotFoundComponent, UnAuthComponent
} from "./routes.components";
import {RouterModule} from "@angular/router";
import {ProductService} from "./services/product.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {LoginService} from "./services/login.service";
import {LoginGaurd} from "./services/login.gaurd";
import {ReversePipe} from "./app.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    CartNavComponent,
    ManageComponent,
    LogInComponent,
    LogOutComponent,
    UnAuthComponent,
    NotFoundComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      {path:"", component: HomeComponent},
      {path:"list", component: ListComponent},
      {path:"cart", component: CartNavComponent},
      {path:"manage", component: ManageComponent, canActivate: [LoginGaurd]},
      {path:"login", component: LogInComponent},
      {path:"logout", component: LogOutComponent},
      {path:"unauth", component: UnAuthComponent},
      {path:"**", component: NotFoundComponent}
    ],
      {useHash: true}),
    ShoppingModule
  ],
  providers: [
    ProductService,
    CartService,
    LoginService,
    LoginGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
