import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private _panelTitle: string = '我是子组件';

  @Input()
  set panelTitle(panelTitle: string) {
    this._panelTitle = '【' + panelTitle + '】';
  }

  get panelTitle(): string {
    return this._panelTitle;
  }

  @Output()
  public follow = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  // 这里只能传递string参数
  public emitAnEvent(a: string): void {
    this.follow.emit(a);
  }

  public childFn(child): void {
    console.log(child);
    alert('父组件调用子组件方法！');
  }
}
