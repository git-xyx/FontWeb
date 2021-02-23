import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'observer', pathMatch: "full"
  },
  {
    path: 'on-push',
    loadChildren: () => import('./learn-on-push/learn-on-push.module').then(m => m.LearnOnPushModule)
  },
  {
    path: 'observer',
    loadChildren: () => import('./learn-observer/learn-observer.module').then(m => m.LearnObserverModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
