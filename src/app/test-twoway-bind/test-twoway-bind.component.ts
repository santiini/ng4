import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-twoway-bind',
  templateUrl: './test-twoway-bind.component.html',
  styleUrls: ['./test-twoway-bind.component.css']
})
export class TestTwowayBindComponent implements OnInit {
  public fontSizePx: number = 14;
  public parentData: string = 'zhiq';
  constructor() { }

  ngOnInit() {
  }

}
