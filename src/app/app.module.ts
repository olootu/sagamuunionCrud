import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';
import { LoginModule } from './components/auth/login.module';
import { YouthMoreComponent } from './components/dialogs/youth-more/youth-more.component';


@NgModule({
  declarations: [
    AppComponent,
    YouthMoreComponent
  ],
  imports: [
   LoginModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({})
  ],
  entryComponents:[YouthMoreComponent],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
   ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
