import { AppRoutingModule } from "./modules/app-routing.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { firebaseConfig } from "./firebase/firebase-config";

import { DataService } from "./service/data.service";

import { AppComponent } from "./app.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { AllComponentModule } from "./modules/all-component.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MobileNavComponent } from "./products/mob-parts/mobile-nav/mobile-nav.component";
import { AllMaterialModule } from "./modules/all-material.module";

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./guards/auth.guard";
import { AdminComponent } from "./dashboard/admin/admin.component";
import { PaymentComponent } from "./dashboard/payment/payment.component";
import { AdminGuard } from "./guards/admin.guard";
import { LazyModule } from "./lazymodules/lazy.module";
import { from } from "rxjs";
import { HostDirective } from "./directives/host.directive";
import { InstagramComponent } from './products/media/instagram/instagram.component';
import { TwitterComponent } from './products/media/twitter/twitter.component';

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
    AdminComponent,
    PaymentComponent,
    HostDirective,
    InstagramComponent,
    TwitterComponent,
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
    LazyModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    AdminGuard,
    MatDatepickerModule,
    MatNativeDateModule,
    DataService,
  ],
})
export class AppModule {}
