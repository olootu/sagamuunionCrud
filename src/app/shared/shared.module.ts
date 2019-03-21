import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { AngMaterialModule } from '../angMaterial/angMaterial.module';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    AngMaterialModule,
    RouterModule
  ],
  exports: [
    AngMaterialModule, FormsModule, CommonModule, ToolbarComponent
  ]
})
export class SharedModule { }
