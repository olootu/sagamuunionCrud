import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/core/auth-interceptor';
import { OnlineShopComponent } from './online-shop.component';
import { ShopComponent } from './shop/shop.component';
import { OnlineShopRoutingModule } from './online-shop.routing.module';

@NgModule({
  declarations: [OnlineShopComponent, ShopComponent],
  imports: [
    CommonModule,
    SharedModule,
    OnlineShopRoutingModule
  ]
})
export class OnlineShopModule { }
