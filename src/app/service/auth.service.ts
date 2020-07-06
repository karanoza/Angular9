import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}
  checkUserNameAndPassword(uname: string, pwd: string) {
    if (uname == "admin" && pwd == "admin") {
      // use localStorage to save username in TempMemory
      localStorage.setItem("username", "admin");

      //  for step 6 go to 'login.component.html'
      return true;
    } else {
      return false;
    }
  }

  checkAdmin(sname: string, spwd: string) {
    if (sname == "super" && spwd == "super") {
      // use localStorage to save username in TempMemory
      localStorage.setItem("adminname", "super");

      //  for step 6 go to 'login.component.html'
      return true;
    } else {
      return false;
    }
  }
}
