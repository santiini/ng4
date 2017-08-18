import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
// 定义EventBusService服务
export class EventBusService {
  // 定义一个事件总线eventBus。在child1和child2里都引入这个事件总线
  public eventBus: Subject<string> = new Subject<string>();
  constructor() { }
  // 可以将一些要在各组件间公用的变量存在服务内。然后在各组件内引入之后调用或触发数据的修改
  public newData: string = 'zhiq';

  getData(): string {
    return this.newData;
  }

  setData(val: string): void {
    this.newData = val;
  }

}
