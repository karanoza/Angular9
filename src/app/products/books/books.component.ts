import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styles: []
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  mobParts = [
    {
      id: 1001,
      name: "iPhone",
      description: "5.5 Screen for Moto g",
      inStock: 5,
      prodNameColor: "white",
      isOnline: false
    },
    {
      id: 1002,
      name: "OnePlus",
      description: "5 Screen for Samsung",
      inStock: 8,
      prodNameColor: "white",
      isOnline: false
    },
    {
      id: 1003,
      name: "Redmi",
      description: "Key panel for Nokia",
      inStock: 0,
      prodNameColor: "white",
      isOnline: true
    }
  ];
}
