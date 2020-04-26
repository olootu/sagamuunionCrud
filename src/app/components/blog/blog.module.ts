import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './blog.service';
import { BlogRoutingModule } from './blog-routing.module';
import { AngMaterialModule } from 'src/app/angMaterial/angMaterial.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    AngMaterialModule,
    SharedModule
  ],
  providers: [BlogService]
})
export class BlogModule { }
