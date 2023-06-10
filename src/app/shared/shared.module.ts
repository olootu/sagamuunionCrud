import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMaterialModule } from '../angMaterial/angMaterial.module';
import { NgProgressModule } from 'ngx-progressbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchPipe } from './pipes/search.pipe';
import { SortbyPipe } from './pipes/sortby.pipe';
import { LoadingComponent } from './loading/loading.component';
import { MemberModule } from '../components/member/member.module';


@NgModule({
  declarations: [ToolbarComponent, SearchPipe, SortbyPipe, LoadingComponent],
  imports: [

    CommonModule,
    AngMaterialModule,
    RouterModule,
    NgProgressModule,
    MemberModule
  ],
  exports: [
    AngMaterialModule, FormsModule, ReactiveFormsModule,
    CommonModule,
    ToolbarComponent, SearchPipe, SortbyPipe,
    LoadingComponent,
    NgProgressModule
  ]
})
export class SharedModule { }
