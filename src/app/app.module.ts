import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import {CoreModule} from './core/core.module';

import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { MemberModule } from './components/member/member.module';
import { AboutModule } from './components/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
   HomeModule,
   MemberModule,
   AboutModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
