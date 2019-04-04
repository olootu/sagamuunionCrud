import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { MemberRoutingModule } from '../member/member.routing.module';
import { MemberComponent } from './member/member.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [MemberComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
