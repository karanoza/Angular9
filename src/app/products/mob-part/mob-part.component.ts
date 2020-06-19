import { Component, OnInit } from '@angular/core';

// import { MobParts } from './mob-parts';
import { MobParts } from 'src/app/models/mob-parts';
import { MOBPARTS } from './mock-data';

@Component({
  selector: 'app-mob-part',
  templateUrl: './mob-part.component.html',
})
export class MobPartComponent implements OnInit {
  name: string = 'Alex';
  // name = 1234;

  ngOnInit(): void {
    // component
    this.mobParts = MOBPARTS;
    console.log('1 ngOnInit Block...!');
  }

  constructor() {
    console.log('2 Constructor Block...!');
  } // class: DI -> obj init

  // 8 lifecylehooks

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mobParts = [];
    console.log('3 ngOnDestroy Block...!');
  }

  ngAfterViewInit() {
    console.log('4 ngAfterViewInit Block...!');
  }

  ngAfterContentInit() {
    console.log('5 ngAfterContentInit Block...!');
  }

  mobParts: MobParts[]; // 10MB

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
}

//  Gmail :  inbox  -> send :  10mb
