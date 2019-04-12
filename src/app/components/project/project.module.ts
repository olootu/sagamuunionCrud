import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/core/auth-interceptor';
import { ProjectComponent } from './project/project.component';
import { ProjectRoutingModule } from './project.routing.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ],
})
export class ProjectModule { }
