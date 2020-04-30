import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appUnless]' })
export class UnlessDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // 容器内插入模板
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      // 清除容器内模板
      this.viewContainer.clear();
    }

  }
}