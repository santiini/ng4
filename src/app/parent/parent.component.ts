import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TestChildComponent } from './test-child/test-child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  @ViewChild(TestChildComponent)
  // 存为自己的方法。下面可以通过testChild来关联子组件
  testChild: TestChildComponent;
  public data: string = 'zhiq';
  public dataa: string = '父组件传给子组件的数据';
  public b: string = 'zhi';
  public ddd: string = '我是参数';
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(222);
  }
  doSthing(a) {
    console.log(`子组件触发了父组件的doSthing方法并传递了参数${a}`);
  }

  a(ddd: string): void {
    // 要在这里面调用子组件的方法
    this.testChild.b(ddd);
  }
}
