import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-switch',
  templateUrl: './test-ng-switch.component.html',
  styleUrls: ['./test-ng-switch.component.css']
})
export class TestNgSwitchComponent implements OnInit {
  public mapStatus: string = '正在读取';
  public a: number = 1;
  constructor() { }

  ngOnInit() {
  }
  public changeStatus(): void {
    this.a = Math.ceil(Math.random() * 100000000) % 3;
    if (this.a === 0) {
      this.mapStatus = '正在读取';
    } else if (this.a === 1) {
      this.mapStatus = '下载中';
    } else {
      this.mapStatus = '系统繁忙';
    }
  }
}
