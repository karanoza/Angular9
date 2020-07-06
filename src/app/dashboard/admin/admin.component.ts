import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
  providers: [AuthService],
})
export class AdminComponent implements OnInit {
  msg: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  check(uname: string, p: string) {
    var output = this.authService.checkAdmin(uname, p);
    if (output == true) {
      this.router.navigate(["/dashboard/payment"]);
    } else {
      this.msg = "Invalid username or password";
    }
  }
}
