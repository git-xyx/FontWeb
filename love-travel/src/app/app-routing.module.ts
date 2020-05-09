import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'account', pathMatch: 'full'
  },
  {
    path: 'account', loadChildren: './account/account.module#AccountModule'
  },
  {
    path: 'home', loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '**', redirectTo: 'account', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
