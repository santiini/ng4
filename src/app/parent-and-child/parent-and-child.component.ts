import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent-and-child',
  templateUrl: './parent-and-child.component.html',
  styleUrls: ['./parent-and-child.component.css']
})
export class ParentAndChildComponent implements OnInit {
  @ViewChild(ChildComponent)
  private childComponent: ChildComponent;
  // a: string;
  constructor() { }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   //this.childComponent.childFn();
  // }

  public doSomething(a): void {
    console.log(a);
    alert('收到了子组件的自定义事件！');
  }
}
