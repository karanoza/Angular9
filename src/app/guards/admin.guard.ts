import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  routes: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem("adminname") != null) {
      return true;
    } else {
      this.router.navigate(["/admin"]);
      return false;
    }
  }
}
