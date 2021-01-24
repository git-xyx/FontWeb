import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnOnPushRoutingModule, componentList } from './learn-on-push-routing.module';

@NgModule({
  declarations: [
    componentList
  ],
  imports: [
    CommonModule,
    LearnOnPushRoutingModule
  ]
})
export class LearnOnPushModule { }
