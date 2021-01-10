import { Component, OnInit } from '@angular/core';
import { DrawMap } from './draw-function/draw-map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(
    public drawMap: DrawMap
  ) { }

  ngOnInit() { }

}
