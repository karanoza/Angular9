import { AppRoutingModule } from "./modules/app-routing.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { AllComponentModule } from "./modules/all-component.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MobileNavComponent } from "./products/mob-parts/mobile-nav/mobile-nav.component";
import { AllMaterialModule } from "./modules/all-material.module";
import { DataService } from "./service/data.service";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./guards/auth.guard";
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
    LoginComponent,
    DashboardComponent,
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
    HttpModule,
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard, MatDatepickerModule, MatNativeDateModule, DataService],
})
export class AppModule {}
