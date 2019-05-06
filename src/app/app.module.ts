import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { MemberModule } from './components/member/member.module';
import { AboutModule } from './components/about/about.module';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from './core/auth-interceptor';
import { LoginModule } from './components/auth/login.module';
import { YouthModule } from './components/youth/youth.module';
import { ProjectModule } from './components/project/project.module';
import { YouthMoreComponent } from './components/dialogs/youth-more/youth-more.component';

@NgModule({
  declarations: [
    AppComponent,
    YouthMoreComponent
  ],
  imports: [
   HomeModule,
   MemberModule,
   AboutModule,
   LoginModule,
   YouthModule,
   ProjectModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  entryComponents:[YouthMoreComponent],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
   ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
