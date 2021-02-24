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

    // https://www.cnblogs.com/forcheng/p/13433371.html
    // .......................
    let a = new Observable(subscriber => {
      subscriber.next(1),
        subscriber.next(new Date()),
        subscriber.complete()
    });
    a.subscribe({
      next: x => console.log("sss" + x),
      complete: () => console.log("sf")
    })
    // 默认next error complete
    // a.subscribe(
    //   x => console.log("sss" + x),
    // )
    a.subscribe(
      x => console.log("sss" + x),
      () => console.log("errt"),
      () => console.log("compelte")
    )

    // .......................



    // .......................
    const able = of(1, 2, 3);
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


    // .......................
    let subject = new Subject(); // 创建主题对象

    let observer1 = new Observer('semlinker'); // 创建观察者A - 'semlinker'
    let observer2 = new Observer('lolo'); // 创建观察者B - 'lolo'

    subject.registerObserver(observer1); // 注册观察者A
    subject.registerObserver(observer2); // 注册观察者B

    subject.notifyObservers(); // 通知观察者

    subject.unregisterObserver(observer1); // 移除观察者A

    subject.notifyObservers(); // 验证是否成功移除
  }

}

class Subject {
  observerCollection;

  constructor() {
    this.observerCollection = [];
  }

  registerObserver(observer) {
    this.observerCollection.push(observer);
  }

  unregisterObserver(observer) {
    let index = this.observerCollection.indexOf(observer);
    if (index >= 0) this.observerCollection.splice(index, 1);
  }

  notifyObservers() {
    this.observerCollection.forEach((observer) => observer.notify());
  }
}

class Observer {
  name;
  constructor(name) {
    this.name = name;
  }

  notify() {
    console.log(`${this.name} has been notified.`);
  }
}
