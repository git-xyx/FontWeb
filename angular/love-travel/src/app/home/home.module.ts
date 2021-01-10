import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { DrawMap } from './map/draw-function/draw-map';
// component
import { HomeRoutingModule, HomeComponentList } from './home-routing.module';
// service
// import { UserService } from '../public/service/userservice';

@NgModule({
  declarations: [
    HomeComponentList
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxEchartsModule
  ],
  providers: [
    DrawMap
  ]
})
export class HomeModule { }
