import { Injectable } from "@angular/core";
import { DBMOBPARTS } from "./../database/db";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: Http) {}
  getMobParts() {
    // data logic
    // return DBMOBPARTS; // 10

    return this.http
      .get("./../../assets/API/data.json")
      .pipe(map((res) => res.json().apiData));
  }
}
