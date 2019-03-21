import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { AngMaterialModule } from '../angMaterial/angMaterial.module';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [ToolbarComponent, SearchPipe],
  imports: [
    CommonModule,
    AngMaterialModule,
    RouterModule
  ],
  exports: [
    AngMaterialModule, FormsModule, CommonModule, ToolbarComponent, SearchPipe
  ]
})
export class SharedModule { }
