import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SonComponent } from './son/son.component';
import { UnlessDirective } from './directive/unless.directive';
import { CommunicationService } from './communite/communication.service';
import { MineComponent } from './mine/mine.component';
import { FatherComponent } from './father/father.component';
import { echarts } from 'echarts'
import { NgxEchartsModule } from 'ngx-echarts';
import { CharpterOneComponent } from './comList/charpter-one/charpter-one/charpter-one.component';
import { AdDirective } from './directive/ad.directive';
import { TrynewModule } from './trynew/trynew.module'
// import { SonComponent } from './father/son/son.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SonComponent,
    UnlessDirective,
    MineComponent,
    FatherComponent,
    CharpterOneComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxEchartsModule,
    TrynewModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
