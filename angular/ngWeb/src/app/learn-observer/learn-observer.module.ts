import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnObserverRoutingModule, componentList } from './learn-observer-routing.module';

@NgModule({
  declarations: [componentList],
  imports: [
    CommonModule,
    LearnObserverRoutingModule
  ]
})
export class LearnObserverModule { }
