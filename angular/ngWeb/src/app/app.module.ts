import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnOnPushModule } from './learn-on-push/learn-on-push.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LearnOnPushModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
