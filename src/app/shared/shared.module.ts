import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngMaterialModule } from '../angMaterial/angMaterial.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngMaterialModule
  ],
  exports: [
    AngMaterialModule, FormsModule, CommonModule
  ]
})
export class SharedModule { }
