import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MembersService } from './members.service';
import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }, MembersService
   ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule ) {
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
 }
