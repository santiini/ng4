import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
// 用来充当事件总线的service、定义一个事件总线。在child1和child2里都引入这个事件总线
export class EventBusService {
  public eventBus: Subject<string> = new Subject<string>();
  constructor() { }

  public newData: string = 'zhiq';

  getData(): string {
    return this.newData;
  }

  setData(val: string): void {
    this.newData = val;
  }

}
