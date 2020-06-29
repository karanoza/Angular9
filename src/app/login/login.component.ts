import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  // step 10: declare 'msg' identifier for user notification
  msg;
  ngOnInit() {}

  // step 11: define 'check()' method to call service method for validation
  // for step 12 go to 'auth.guard.ts'

  check(uname: string, p: string) {
    var output = this.authService.checkUserNameAndPassword(uname, p);
    if (output == true) {
      this.router.navigate(["/dashboard"]);
    } else {
      this.msg = "Invalid username or password";
    }
  }
}
