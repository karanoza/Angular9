import { NavComponent } from "./layout/nav/nav.component";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

import { DemoComponent } from "./layout/demo/demo.component";
import { ProdComponent } from "./layout/prod/prod.component";
import { IconInfoComponent } from "./layout/icon-info/icon-info.component";
import { Banner2Component } from "./layout/banner2/banner2.component";
import { ContactComponent } from "./layout/contact/contact.component";
import { Banner3Component } from "./layout/banner3/banner3.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { MobPartsComponent } from './products/mob-parts/mob-parts.component';
import { BooksComponent } from './products/books/books.component';
import { ClothesComponent } from './products/clothes/clothes.component';
import { MediaComponent } from './products/media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DemoComponent,
    ProdComponent,
    IconInfoComponent,
    Banner2Component,
    ContactComponent,
    Banner3Component,
    FooterComponent,
    MobPartsComponent,
    BooksComponent,
    ClothesComponent,
    MediaComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
