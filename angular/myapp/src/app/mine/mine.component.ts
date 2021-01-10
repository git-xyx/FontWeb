import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import 'echarts/map/js/province/beijing.js';
import 'echarts/map/js/province/shandong.js';
import { AdDirective } from '../directive/ad.directive';
import { FatherComponent } from './../father/father.component'

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.less']
})
export class MineComponent implements OnInit {
  @ViewChild(AdDirective, { static: true }) ad: AdDirective;


  public sd: any
  constructor(
    private compFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {

    this.sd = {
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
      },
      legend: {//legend作用是显示市中心的红点
        show: false,
        data: ['光伏发电']
      },
      series: [
        {
          name: '光伏发电',
          type: 'map',
          mapType: '山东',
          roam: false,
          label: {
            normal: {
              show: true//不显示市名称
            },
            emphasis: {
              show: false
            }
          },
          data: [
            {
              name: '平谷区',
              value: 16729,
              // showLegendSymbol: false,
              itemStyle: { color: '#1231ef' },
              label: {
                normal: {
                  show: true,
                  formatter: function (params) {
                    var icon = params.data.value[1] ? 'up' : 'down';
                    var valueType = params.data.value[1] ? 'valueUp' : 'valueDown';
                    return "青岛分行"
                    // + '：{' + valueType + '|' + params.value + '} {' + icon + '|}';
                  },
                  textStyle: {
                    fontSize: 8,
                    // color:"#ffffff"
                  }
                }
              }
            },
            {
              name: '青岛市',
              value: 161729,
              itemStyle: { color: '#bffee9' },
              label: {
                normal:
                {
                  show: true,
                  formatter: function (params) {
                    return `<div>青岛分行</div>`
                  },
                  textStyle:
                  {
                    fontSize: 18,
                  }
                }
              }
            },
            {
              name: '昌平区',
              show: false,
              // value: 20687
            }, {
              name: '通州区',
              value: 51488,
            },

          ]
        },
      ]
    };
    this.loadComp()
  }

  loadComp() {
    let compFactory = this.compFactoryResolver.resolveComponentFactory(FatherComponent);
    let viewContainRef = this.ad.viewContainerRef;

    let compRef = viewContainRef.createComponent(compFactory);
    console.log(compRef.instance['scenfeId']);
    compRef.instance['scenfeId'] = "hhh";

    let compRef2 = viewContainRef.createComponent(compFactory);
    console.log(compRef2.instance['sceneId']);
    compRef2.instance['sceneId'] = "xxx";
    

  }


}
