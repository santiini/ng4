import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../service/event-bus.service';  // 引入事件总线

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(public eventBusService: EventBusService) { }

  ngOnInit() {
  }

  getData() {
    console.log(this.eventBusService);
    console.log(this.eventBusService.getData());
  }
  public triggerEventBus(): void {
    // 像事件总线上所有订阅eventBus事件的人发送一个参数
    this.eventBusService.eventBus.next('第一个被触发的事件');
  }

}
