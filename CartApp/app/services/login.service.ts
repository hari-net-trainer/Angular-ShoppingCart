import {Injectable} from "@angular/core";

@Injectable()
export class LoginService{
  private isLoggedIn:boolean = false;

  isValidUser(uName:string, passWord:string){
    if(uName == "admin"){
      this.setIsLoggedIn(true);
      return true;
    }
    this.setIsLoggedIn(false);
    return false;
  }

  setIsLoggedIn(newVal:boolean){
    this.isLoggedIn = newVal;
  }

  getIsLoggedIn(){
    return this.isLoggedIn;
  }
}
