import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMaterialModule } from '../angMaterial/angMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgProgressModule } from '@ngx-progressbar/core';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchPipe } from './pipes/search.pipe';
import { SortbyPipe } from './pipes/sortby.pipe';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [ToolbarComponent, SearchPipe, SortbyPipe, LoadingComponent],
  imports: [

  CommonModule,
    AngMaterialModule,
    FlexLayoutModule ,
    NgProgressModule,
    RouterModule
  ],
  exports: [
    AngMaterialModule, FormsModule, ReactiveFormsModule,
    CommonModule, FlexLayoutModule,NgProgressModule, 
    ToolbarComponent, SearchPipe, SortbyPipe,
    LoadingComponent
  ]
})
export class SharedModule { }
