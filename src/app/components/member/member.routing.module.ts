import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { AuthGuard } from './../auth/auth.guard';

const routes: Routes = [
  { path: 'member', component: MemberComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: MemberComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [

  RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class MemberRoutingModule { }
