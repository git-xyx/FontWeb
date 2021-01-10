import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// component
import { AccountRoutingModule, AccountComponentList } from './account-routing.module';
// service
import { UserService } from '../public/service/userservice';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@NgModule({
  declarations: [
    AccountComponentList
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    NzModalModule,
    NzDrawerModule
  ],
  providers: [
    UserService
  ],
})
export class AccountModule { }
