import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/core/auth-interceptor';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login.routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  //   }
  //  ]
})
export class LoginModule { }
