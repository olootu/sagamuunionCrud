import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/core/auth-interceptor';
import { YouthComponent } from './youth/youth.component';
import { YouthRoutingModule } from './youth.routing.module';

@NgModule({
  declarations: [YouthComponent],
  imports: [

  CommonModule,
    SharedModule,
    YouthRoutingModule
  ]
})
export class YouthModule { }
