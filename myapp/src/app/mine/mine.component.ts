import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.less']
})
export class MineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var result;
    result = this.sum([1, 2, 5]);
    // console.log(result);

    var temp = [3, 3];
    // console.log(this.lazy_sum(temp)());


    var results = this.count();
    console.log(results[0]);

    var f1 = results[0];
    var f2 = results[1];
    var f3 = results[2];
    console.log(f1());
    console.log(f2());
    console.log(f3());

  }

  count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
      arr.push(function () {
        return i * i;
      });
    }
    return arr;
  }


  sum(arr) {
    return arr.reduce(function (x, y) {
      return x + y;
    });
  }


  lazy_sum(arr) {
    var sum = function () {
      return arr.reduce(function (x, y) {
        return x + y;
      });
    }
    return sum;
  }

}
