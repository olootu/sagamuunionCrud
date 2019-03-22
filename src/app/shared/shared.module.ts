import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngMaterialModule } from '../angMaterial/angMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [ToolbarComponent, SearchPipe],
  imports: [
    CommonModule,
    AngMaterialModule,
    FlexLayoutModule ,
    RouterModule
  ],
  exports: [
    AngMaterialModule, FormsModule, CommonModule, FlexLayoutModule , ToolbarComponent, SearchPipe
  ]
})
export class SharedModule { }
