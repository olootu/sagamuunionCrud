import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YouthComponent } from './youth/youth.component';

const routes: Routes = [
  { path: 'youths', component: YouthComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class YouthRoutingModule { }