import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { MembersService } from './members.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private memberService: MembersService ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.memberService.getToken();
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });
      console.log('Interceptor', authReq);
    return next.handle(authReq);
  }


}
