import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';
// 模板、元数据和组件类共同构成一个模块
// 使用装饰器向你的代码中添加元数据。以便Angular知道他该做什么
// 元数据
@Component({
  selector: 'app-test-fly-in',
  templateUrl: './test-fly-in.component.html',  // 模板
  styleUrls: ['./test-fly-in.component.css'],
  animations: [flyIn]
})

// 组件类
export class TestFlyInComponent implements OnInit {
  state: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  show() {
    this.state = true;
  }
  hide() {
    this.state = false;
  }
}
