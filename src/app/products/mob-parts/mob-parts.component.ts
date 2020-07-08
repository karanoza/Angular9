import { DataService } from "./../../service/data.service";
import { Component, OnInit } from "@angular/core";
import { MobParts } from "src/app/models/mob-parts";
import {
  AngularFireDatabaseModule,
  AngularFireDatabase,
} from "angularfire2/database";
import { MOBPARTS } from "./mock-data";
@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
  styles: [],
})
export class MobPartsComponent implements OnInit {
  mobParts: any[];
  name: string = "Alex";
  // name = 1234;
  constructor(
    private dataService: DataService,
    angularfiredatabse: AngularFireDatabase
  ) {
    angularfiredatabse
      .list("/apiData")
      .valueChanges()
      .subscribe((mobParts) => {
        this.mobParts = mobParts;
        console.log("in constructor");
        console.log(this.mobParts);
      });
  } // class: DI -> obj init
  ngOnInit(): void {
    console.log("1 ngOnInit Block...!");

    // 1. Data from 'mock.ts'
    // this.mobParts = MOBPARTS;

    // 2. Data from 'DB'
    // let comServic = new ComServic();
    // this.mobParts = comServic.getMobParts();

    // 3. Data from 'Provider' using D.I.
    // this.mobParts = this.dataService.getMobParts();
    // component
    // this.mobParts = MOBPARTS;
    // this.dataService.getMobParts().subscribe((res) => (this.mobParts = res));
    // console.log("1 ngOnInit Block...!");
  }

  // mobParts: MobParts[];
  calcProd() {
    let tot = 0;

    for (let mobPart of this.mobParts) {
      tot = tot + mobPart.inStock;
    }
    return tot;
  }

  upQuantity(mobPart) {
    // alert('We are in upQuantity');
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
  }

  downQuantity(mobPart) {
    if (mobPart.quantity != 0) mobPart.quantity--;
  }

  catchVal(event) {
    console.log(event);
  }
  // 8 lifecylehooks

  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.mobParts = [];
  //   console.log("3 ngOnDestroy Block...!");
  // }

  // ngAfterViewInit() {
  //   console.log("4 ngAfterViewInit Block...!");
  // }

  // ngAfterContentInit() {
  //   console.log("5 ngAfterContentInit Block...!");
  // }
  // 10MB
}
