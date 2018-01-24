import {NgModule} from "@angular/core";
import {ProductListComponent} from "./product-list.component";
import {CartitemComponent} from "./cartitem.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ProductListComponent, CartitemComponent],
  exports: [ProductListComponent, CartitemComponent],
  imports: [CommonModule, FormsModule]
})

export class ShoppingModule{

}
