import { MobParts } from "src/app/models/mob-parts";

// uppercase : global/ CONST
// const to original
// PE : TP = 15000RS,  Myntra : TP = 12000Rs

export const MOBPARTS: MobParts[] = [
  {
    header: "iPhone",
    id: 1001,
    name: "screen 5.5",
    description: "5.5 Screen for Moto g",
    inStock: 5,
    prodColor: "red",
    canPurch: true,
    clsVar: true,
    country: "Australia",
    price: 1200,
    prodImg: "iphone2.jpg",
    quantity: 0,
    // size:['m',]
  },
  {
    header: "OnePlus",
    id: 1002,
    name: "SCREEN 5",
    description: "5 Screen for Samsung",
    inStock: 8,
    prodColor: "green",
    canPurch: false,
    clsVar: true,
    country: "India",
    price: 1200,
    prodImg: "oneplus-7-pro.jpg",
    quantity: 0,
  },
  {
    header: "Mi",
    id: 1003,
    name: "Xiaomi",
    description: "Key panel for Nokia",
    inStock: 0,
    prodColor: "blue",
    canPurch: true,
    clsVar: true,
    country: "Germany",
    price: 1200,
    prodImg: "xiaomi.jpg",
    quantity: 0,
  },
];
