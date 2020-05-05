import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineShopComponent } from './online-shop.component';

const routes: Routes = [
  { path: '', component: OnlineShopComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OnlineShopRoutingModule { }
