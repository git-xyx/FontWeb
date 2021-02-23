import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';

export const componentList = [
  EntryComponent
]

const routes: Routes = [
  {
    path: '', redirectTo: 'entry', pathMatch: "full"
  },
  {
    path: 'entry', component: EntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnObserverRoutingModule { }
