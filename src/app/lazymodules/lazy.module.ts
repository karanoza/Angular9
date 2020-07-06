import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LazyoneComponent } from "./lazy/lazyone.component";
import { LazytwoComponent } from "./lazy/lazytwo.component";
import { Routes, RouterModule } from "@angular/router";

const lazyRoutes: Routes = [
  {
    path: "lazy-child",
    component: LazyoneComponent,
  },
];

@NgModule({
  declarations: [LazyoneComponent, LazytwoComponent],
  imports: [CommonModule, RouterModule.forChild(lazyRoutes)],
})
export class LazyModule {}
