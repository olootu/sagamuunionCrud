import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { MemberRoutingModule } from '../member/member.routing.module';
import { MemberComponent } from './member/member.component';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from 'src/app/core/auth-interceptor';

@NgModule({
  declarations: [MemberComponent],
  imports: [
    CommonModule,
    SharedModule,
    MemberRoutingModule
  ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  //   }
  //  ]
})
export class MemberModule { }
