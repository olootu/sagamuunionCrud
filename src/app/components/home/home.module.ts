import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from '../home/home-routing.module';
import { HomeComponent } from './home/home.component';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
   ]
})
export class HomeModule { }
