import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'member', component: MemberComponent },
  { path: 'edit/:postId', component: MemberComponent },
  { path: 'login', component: LoginComponent },
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
