import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../service/event-bus.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  data: string = '1';
  public events: Array<any> = [];
  constructor(public eventBusService: EventBusService) { }
  getData() {
    console.log(this.eventBusService.getData());
  }
  setData() {
    this.eventBusService.setData('aaa');
  }
  ngOnInit() {
    // 订阅事件总线EventBusService上的eventBus事件。当事件触发时执行以下函数
    this.eventBusService.eventBus.subscribe((value) => {
      this.events.push(value + '-' + new Date());
    });
  }

}
