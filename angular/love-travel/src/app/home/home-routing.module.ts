import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';

export const HomeComponentList = [
  MapComponent,
];

const routes: Routes = [
  {
    path: '', redirectTo: 'map', pathMatch: 'full'
  },
  {
    path: 'map', component: MapComponent
  },
  {
    path: '**', redirectTo: 'map', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
