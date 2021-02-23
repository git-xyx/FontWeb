import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const able = of(1, 2, 3);
    let a = new Observable()
    // const er = {
    //   next: x => console.log("next is" + x),
    //   complete: () => {
    //     console.log("done");
    //   }
    // }
    // able.subscribe(er)
    able.subscribe(
      // 默认构造顺序为next,err,complete
      x => console.log("next is" + x),
      err => console.log("err is" + err),
      () => {
        console.log("done");
      }
    )
  }

}
