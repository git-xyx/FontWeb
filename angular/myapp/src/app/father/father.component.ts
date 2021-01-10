import { Component, Input, OnInit, OnDestroy, ViewChild, ComponentFactoryResolver, ComponentFactory, ComponentRef, ViewContainerRef } from '@angular/core';
import { CommunicationService } from './../communite/communication.service';
import { Subscription } from 'rxjs';
import { SonComponent } from '../son/son.component';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.less']
})
export class FatherComponent implements OnDestroy {
  @Input() sceneId: any;

  componentRefArray = [];//定义存放组件实例的数组
  @ViewChild('addPersonContainer', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }
  addPerson(gender: string) {
    console.log(this.sceneId);

    // if (this.container.length < 5) {
    //   //传入组件原型,返回组件工厂
    //   const factory: ComponentFactory<SonComponent> = this.resolver.resolveComponentFactory(SonComponent);
    //   //传入组件工厂,返回组件实例
    //   const componentRef: ComponentRef<SonComponent> = this.container.createComponent(factory);
    //   componentRef.instance.gender = gender;
    //   this.componentRefArray.push(componentRef);
    // }
  }
  clear() {
    this.container.clear();
    this.value = [];
    this.componentRefArray = [];
  }
  value = [];
  getValueList() {
    this.value = [];//遍历数组,调用每一个组件实例的方法
    this.componentRefArray.forEach((obj: ComponentRef<SonComponent>) => {
      this.value.push(obj.instance.returnValue());
    });
  }
  ngOnDestroy() {
    //遍历数组,摧毁每一个实例
    this.componentRefArray.forEach((obj: ComponentRef<SonComponent>) => {
      obj.destroy();
    });
  }

}
