import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { DonateRoutingModule } from './donate.routing.module';
import { DonateComponent } from './donate/donate.component';


@NgModule({
  declarations: [DonateComponent],
  imports: [
  CommonModule,
    SharedModule,
    DonateRoutingModule
  ]
})
export class DonateModule { }
