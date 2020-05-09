import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { UserService } from '../../public/service/userservice';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: any = '';
  public password: any = '';

  constructor(
    public service: UserService,
    public router: Router
  ) {
  }

  login() {
    var user = new User(1, this.username, this.password, "");
    this.service.getUser(user, (res) => {
      if (res.token == 'true') {
        this.router.navigateByUrl('/home/map')
      }
    });

  }

  ngOnInit() {
  }

}
