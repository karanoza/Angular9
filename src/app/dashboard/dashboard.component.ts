import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  logout() {
    localStorage.removeItem("adminname");
  }

  isLogin() {
    if (localStorage.getItem("adminname") != null) return true;
    return false;
  }
}
