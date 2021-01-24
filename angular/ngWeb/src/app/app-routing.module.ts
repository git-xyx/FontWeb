import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'on-push', pathMatch: "full"
  },
  {
    path: 'on-push',
    loadChildren: () => import('./learn-on-push/learn-on-push.module').then(m => m.LearnOnPushModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
