import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : '', loadChildren: () => import('../app/element-po/login/login.module').then(m=>m.LoginModule) ,data  :{title : "Login"}},
  { path: 'login', loadChildren: () => import('../app/element-po/login/login.module').then(m => m.LoginModule) ,data  :{title : "Login"}},
  // { path: 'elementp2p', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) ,data  :{title : "Login"}},
  // { path: 'vendor', loadChildren: () => import('./vendor-portal/vendor-portal.module').then(m => m.VendorPortalModule) ,data  :{title : "Login"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
