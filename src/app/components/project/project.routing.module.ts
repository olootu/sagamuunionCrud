import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './project.service';

const routes: Routes = [
  { path: '', component: ProjectComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ ProjectService ]
})
export class ProjectRoutingModule { }
