import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {
  // 我在这里声明一下我需要什么变量。你们要用我就得给我传这个变量
  @Input() DATA: string;
  // 定义一个事件发射器，用来发射事件。可以在父组件监听这个事件发射器，当事件发射器被触发时执行某些操作。
  @Output()
  public emitEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  // 点击按钮时触发up方法、在up方法内触发事件发射器
  up(a: string): void {
    this.emitEvent.emit(a); // 触发emitEvent事件发射器，并携带参数a
  }
  // 这个方法由父组件触发
  go(b): void {
    console.log('父组件触发了子组件的go方法并传递了参数:' + b);
  }

  b(ddd) {
    console.log('父组件在a方法里调用了子组件的b方法并传递参数:' + ddd);
  }
}
