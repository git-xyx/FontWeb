import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  balls: any[] = ['basketball', 'football'];
  constructor(
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  changeRef() {
    this.balls = ['baseball', 'pingpong'];
  }

  addBall(ball) {
    
    this.balls.push(ball);
    setTimeout(() => {
      this.cdr.detach();
      this.cdr.detectChanges();
    }, 5000);
   
  }


}
