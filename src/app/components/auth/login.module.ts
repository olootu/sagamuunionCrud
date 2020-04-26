import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
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
})
export class LoginModule { }
