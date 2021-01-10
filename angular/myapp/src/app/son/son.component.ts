import { Component, OnInit, Input, SimpleChanges, OnDestroy } from '@angular/core';
import { CommunicationService } from './../communite/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.less']
})
export class SonComponent implements OnInit {
  gender = 'boy';
  name;
  age;
  nameTip;
  ageTip;
  ngOnInit(): void {
    if (this.gender === 'boy') {
      this.nameTip = '小哥哥的姓名';
      this.ageTip = '小哥哥的年龄';
    } else if (this.gender === 'girl') {
      this.nameTip = '小姐姐的姓名';
      this.ageTip = '小姐姐的年龄';
    }
  }
  returnValue() {
    return {
      name: this.name,
      age: this.age
    };
  }

}
