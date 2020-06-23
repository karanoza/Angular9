import { AppRoutingModule } from "./modules/app-routing.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavComponent } from "./layout/nav/nav.component";
import { DemoComponent } from "./layout/demo/demo.component";
import { ProdComponent } from "./layout/prod/prod.component";
import { IconInfoComponent } from "./layout/icon-info/icon-info.component";
import { Banner2Component } from "./layout/banner2/banner2.component";
import { ContactComponent } from "./layout/contact/contact.component";
import { Banner3Component } from "./layout/banner3/banner3.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { MobPartsComponent } from "./products/mob-parts/mob-parts.component";
import { BooksComponent } from "./products/books/books.component";
import { ClothesComponent } from "./products/clothes/clothes.component";
import { MediaComponent } from "./products/media/media.component";
import { HomeComponent } from "./layout/home/home.component";
import { PageNotFoundComponent } from "./layout/page-not-found/page-not-found.component";
import { OneplusComponent } from './products/mob-parts/oneplus/oneplus.component';
import { AppleComponent } from './products/mob-parts/apple/apple.component';

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
    MediaComponent,
    HomeComponent,
    PageNotFoundComponent,
    OneplusComponent,
    AppleComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
