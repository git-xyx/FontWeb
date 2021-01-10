import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // performance() {
  //   var performance = window.performance;
  //   var t = performance.timing;
  //   var now = performance.now();
  //   var pageloadtime = t.loadEventstart - t.navigationstart;
  //   var domparse = t.domComplete - t.domInteractive;
  //   var domloadtime = t.domContentLoadedEventEnd - t.navigationStart;
  //   var dns = t.domainLookupEnd - t.domainLookupStart;
  //   var tcp = t.connectEnd - t.connectstart;
  //   var ttfb = t.responsestart - t.navigationstart;
  //   console.log("pageloadtime: " + pageloadtime);
  //   console.log("now: " + now);
  //   console.log("domparse: " + domparse);
  //   console.log("domloadtime: " + domloadtime);
  //   console.log("dns: " + dns);
  //   console.log("tcp: " + tcp);
  //   console.log("ttfb: " + ttfb);
  //   setTimeout(function () {
  //     var pageloadtime = t.loadEventEnd - t.navigationstart;
  //     console.log("pageloadtime: " + pageloadtime);
  //   }, 0);
  // }

  constructor(
    public domsss: DomSanitizer
  ) {

  }

  urlr = this.domsss.bypassSecurityTrustResourceUrl("http://localhost:4201/")
  ngOnInit() {
    if (new Date().getMinutes() > 16) {
      this.urlr = this.domsss.bypassSecurityTrustResourceUrl("http://localhost:4202/")
    }
    // window.addEventListener("message", (event) => {
    //   console.log(event.data);
    // });
    setTimeout(() => {
      window.postMessage({ tag: "f父页面" }, '*')
    }, 5000);
  }

}
