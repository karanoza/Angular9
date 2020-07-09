import { AuthGuard } from "./../guards/auth.guard";
import { AllComponentModule } from "./all-component.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MobPartsComponent } from "../products/mob-parts/mob-parts.component";
import { BooksComponent } from "../products/books/books.component";
import { ClothesComponent } from "../products/clothes/clothes.component";
import { MediaComponent } from "../products/media/media.component";
import { PageNotFoundComponent } from "../layout/page-not-found/page-not-found.component";
import { HomeComponent } from "../layout/home/home.component";
import { OneplusComponent } from "../products/mob-parts/oneplus/oneplus.component";
import { AppleComponent } from "../products/mob-parts/apple/apple.component";

import { from } from "rxjs";
import { MobileNavComponent } from "../products/mob-parts/mobile-nav/mobile-nav.component";
import { LoginComponent } from "../login/login.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

import { AdminGuard } from "../guards/admin.guard";
import { PaymentComponent } from "../dashboard/payment/payment.component";
import { AdminComponent } from "../dashboard/admin/admin.component";
import { InstagramComponent } from "../products/media/instagram/instagram.component";
import { TwitterComponent } from "../products/media/twitter/twitter.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      { path: "admin", component: AdminComponent },
      {
        path: "payment",
        canActivate: [AdminGuard],
        component: PaymentComponent,
      },
    ],
  },

  {
    path: "mobile",
    component: MobileNavComponent,
    children: [
      { path: "", component: MobPartsComponent },
      {
        path: "oneplus",
        component: OneplusComponent,
      },
      {
        path: "apple",
        component: AppleComponent,
      },
    ],
  },
  {
    path: "lazy",
    loadChildren: "../lazymodules/lazy.module#LazyModule",
  },
  { path: "books", component: BooksComponent },
  { path: "clothes", component: ClothesComponent },
  { path: "media", component: MediaComponent },
  { path: "instagram", component: InstagramComponent, outlet: "insta" },
  { path: "twitter", component: TwitterComponent, outlet: "tweet" },
  { path: "**", component: PageNotFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes), AllComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
