import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  size: number | string;
  @Output()
  sizeChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  add() { this.resize(-1); }
  dec() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    // 在这里传递出去size。父组件内双向绑定size来传入或接收
    this.sizeChange.emit(this.size);
  }
}
