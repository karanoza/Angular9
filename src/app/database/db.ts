import { MobParts } from "src/app/models/mob-parts";

// uppercase : global/ CONST
// const to original
// PE : TP = 15000RS,  Myntra : TP = 12000Rs

export const DBMOBPARTS: MobParts[] = [
  {
    header: "iPhone",
    id: 1111,
    name: "screen 5.5",
    description: "5.5 Screen for iphone",
    inStock: 5,
    prodColor: "red",
    canPurch: true,
    clsVar: true,
    country: "Australia",
    price: 68000,
    prodImg: "iphone2.jpg",
    quantity: 0,
    // size:['m',]
  },
  {
    header: "OnePlus",
    id: 1002,
    name: "SCREEN 5",
    description: "6.6 Screen for OnePlus",
    inStock: 8,
    prodColor: "green",
    canPurch: false,
    clsVar: true,
    country: "India",
    price: 53000,
    prodImg: "oneplus-7-pro.jpg",
    quantity: 0,
  },
  {
    header: "Mi",
    id: 1003,
    name: "Xiaomi",
    description: "Key panel for Xiaomi",
    inStock: 0,
    prodColor: "blue",
    canPurch: true,
    clsVar: true,
    country: "Germany",
    price: 15000,
    prodImg: "xiaomi.jpg",
    quantity: 0,
  },
];
