import { AppRoutingModule } from "./modules/app-routing.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { AllComponentModule } from "./modules/all-component.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MobileNavComponent } from "./products/mob-parts/mobile-nav/mobile-nav.component";
import { AllMaterialModule } from "./modules/all-material.module";
@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,
    // DemoComponent,
    // ProdComponent,
    // IconInfoComponent,
    // Banner2Component,
    // ContactComponent,
    // Banner3Component,
    // FooterComponent,
    // MobPartsComponent,
    // BooksComponent,
    // ClothesComponent,
    // MediaComponent,
    // HomeComponent,
    // PageNotFoundComponent,
    // OneplusComponent,
    // AppleComponent,
    MobileNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AllComponentModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AllMaterialModule,
  ],
  bootstrap: [AppComponent],
  providers: [MatDatepickerModule, MatNativeDateModule],
})
export class AppModule {}
