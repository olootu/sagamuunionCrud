import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', 
  loadChildren: '../app/components/home/home.module#HomeModule'
},
  { 
    path: 'about',
    loadChildren: '../app/components/about/about.module#AboutModule'
  },
  { 
    path: 'blog',
    loadChildren: '../app/components/blog/blog.module#BlogModule'
  },
  { 
    path: 'youths',
    loadChildren: '../app/components/youth/youth.module#YouthModule'
  },
  { 
    path: 'projects',
    loadChildren: '../app/components/project/project.module#ProjectModule'
  },
  { 
    path: 'eshop',
    loadChildren: '../app/components/online-shop/online-shop.module#OnlineShopModule'
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
