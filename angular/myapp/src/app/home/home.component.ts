import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { saveAs } from "file-saver";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public value;
  public classfName: string = "classfName fgreen "
  fatherValue1;
  childValue1;

  public tableTitle: any;
  public tableData: any;

  public options: any;

  constructor() { }
  transferData() {
    console.log(this.childValue1);
    this.childValue1 = '';
    console.log(this.childValue1);
    var s = this;
    setTimeout(() => {
      s.childValue1 = this.fatherValue1;
    }, 0)

  }

  // exportTable() {
  //   const blob = new Blob([document.getElementById('exportableTable').innerHTML], {
  //     type: "application/vnd.ms-excel"
  //     // type: "application/octet-stream"
  //   });
  //   saveAs(blob, 'test.xlsx');
  // }

  ngOnInit() {
    this.tableTitle = ['ID', '姓名', '身份证'];
    this.tableData = [12, '张三', 3245320853428];


    d3.select('.pic')
      .selectAll('circle')
      .data([1000, 10000, 250000, 15000])
      .enter()
      .append('circle')
      .attr('r', d => Math.log(d))
      .attr('fill', '#5fc')
      .attr('stroke', '#333')
      .attr('transform', (d, i) => {
        var offset = i * 20 + 2 * Math.log(d);
        return `translate(${offset}, ${offset})`;
      });
    var data = {
      "name": "常德日营",
      itemStyle: {
        color: '#fc853e',
        borderColor: '#fc853e'
      },
      label: {
        color: '#fc853e',
      },
      "children": [
        {
          "name": "投资关联",
          itemStyle: {
            color: '#28cad8',
            borderColor: '#28cad8'
          },
          lineStyle: {
            color: '#28cad8',
            borderColor: '#28cad8'
          },
          "children": [
            {
              "name": "converters",
              itemStyle: {
                color: '#28cad8',
                borderColor: '#28cad8'
              },
              lineStyle: {
                color: '#28cad8',
                borderColor: '#28cad8'
              },
            },
            {
              "name": "DataUtil",
              itemStyle: {
                color: '#28cad8',
                borderColor: '#28cad8'
              },
              lineStyle: {
                color: '#28cad8',
                borderColor: '#28cad8'
              },
            }
          ]
        },
        {
          "name": "家族企业",
          itemStyle: {
            color: '#9564bf',
            borderColor: '#9564bf'
          },
          lineStyle: {
            color: '#9564bf',
            borderColor: '#9564bf'
          },

        },

      ]
    };

    this.options = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          id: 0,
          name: 'tree1',
          data: [data],

          top: '10%',
          left: '8%',
          bottom: '22%',
          right: '20%',

          symbolSize: 7,
          orient: 'vertical',

          edgeShape: 'polyline',
          edgeForkPosition: '63%',
          initialTreeDepth: 3,
          roam: true,
          draggable: false,   //注意这里设置为false，不然拖拽鼠标和节点有偏移

          lineStyle: {
            width: 2
          },
          layout: 'radial',
          label: {//文本标签样式
            position: 'top',
            verticalAlign: 'center',
            align: 'center',
            distance: 10,
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          itemStyle: {
            color: 'blue',
            borderColor: 'blue',//节点圆圈边框的颜色
            borderWidth: 8,//节点圆圈的大小
            borderType: 'solid',//节点圆圈类型
          },

          expandAndCollapse: true,//子树折叠和展开的交互
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    };
  }

  onKey(event: any) {
    console.log(event);
    this.value = event.target.value;
  }




  // exportTable() {
  //   var wb = XLSX.utils.table_to_book(document.querySelector('#exportableTable'))
  //   var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
  //   try {
  //     FileSaver.saveAs(new Blob([wbout], { type: 'application/vnd.ms-excel' }), 'sheetjs.xlsx')
  //   } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
  //   return wbout
  // }



  jsonData: any = [
    {
      "姓名": "张三",
      "工號": "22",
      "英文名": "zhangsan",
      "部门": "技术部",
      "性别": "男",
      "手机": "15177641999",
      "个人邮箱": "610336688@qq.com"
    }, {
      "姓名": "李四",
      "工號": "33",
      "英文名": "李四",
      "部门": "人事部",
      "性别": "女",
      "手机": "15177641988",
      "个人邮箱": "978336688@qq.com"
    }];

  exportTable() {
    const exportItem = this.jsonData;

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportItem);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'report');
  }

  private saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    });
    FileSaver.saveAs(data, fileName + '.xlsx');

  }


  exportExcel() {
    var xlsxParam = { raw: true, display: true };//转换成excel时，使用原始的格式
    var tab = document.querySelector("#exportableTable2");

    var copytab = tab;
    var Myname = copytab.querySelectorAll(".noExport") as any;
    for (var i = 0; i < Myname.length; i++) {
      Myname[i].hidden = "true";
    }


    var sheet1 = XLSX.utils.table_to_sheet(document.querySelector("#exportableTable"), xlsxParam);
    var sheet2 = XLSX.utils.table_to_sheet(copytab, xlsxParam);

    for (var i = 0; i < Myname.length; i++) {
      Myname[i].removeAttribute("hidden");
    }
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1, "表格一");
    XLSX.utils.book_append_sheet(wb, sheet2, "表格2");

    var wbout = XLSX.write(wb, {
      bookType: "xlsx",
      bookSST: true,
      type: "array"
    });
    try {
      FileSaver.saveAs(
        new Blob([wbout], { type: "application/octet-stream;charset=utf-8" }),
        "sheetjs.xlsx"
      );
    } catch (e) {
      if (typeof console !== "undefined") console.log(e, wbout);
    }
    return wbout;
  }

  // exportExcel() {
  //   var html = "<html><head><meta charset='utf-8' /></head><body>" + document.getElementsByTagName("table")[0].outerHTML + "</body></html>";
  //   // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
  //   var blob = new Blob([html], { type: "application/vnd.ms-excel" });
  //   var a = document.getElementsByTagName("a")[0];
  //   // 利用URL.createObjectURL()方法为a元素生成blob URL
  //   a.href = URL.createObjectURL(blob);
  //   // 设置文件名
  //   a.download = "学生成绩表.xls";
  // }



}
