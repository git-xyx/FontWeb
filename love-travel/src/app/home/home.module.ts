import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    HomeRoutingModule
  ]
})
export class HomeModule { }
