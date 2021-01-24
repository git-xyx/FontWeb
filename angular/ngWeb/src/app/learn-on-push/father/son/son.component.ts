import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SonComponent implements OnInit {
  @Input() balls: any[];

  constructor(
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.balls.push('new ball');
    }, 2000)


    // setTimeout(() => {
    //   // this.cdr.detach();
    //   this.cdr.detectChanges();
    // }, 5000);
  }


}
