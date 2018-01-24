import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {LoginService} from "./login.service";

@Injectable()
export class LoginGaurd implements CanActivate{
  canActivate() {
    return this.lSvc.getIsLoggedIn();
  }

  constructor(private lSvc: LoginService){}
}
