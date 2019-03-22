import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  { path: 'member', component: MemberComponent },
  { path: 'edit/:postId', component: MemberComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MemberRoutingModule { }
