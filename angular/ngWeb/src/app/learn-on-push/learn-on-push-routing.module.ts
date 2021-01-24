import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './father/son/son.component';

export const componentList = [
  FatherComponent,
  SonComponent
]

const routes: Routes = [
  {
    path: '', redirectTo: 'father', pathMatch: "full"
  },
  {
    path: 'father', component: FatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnOnPushRoutingModule { }
