import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// component
import { AccountRoutingModule, AccountComponentList } from './account-routing.module';
// service
import { UserService } from '../public/service/userservice';

@NgModule({
  declarations: [
    AccountComponentList
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
})
export class AccountModule { }
