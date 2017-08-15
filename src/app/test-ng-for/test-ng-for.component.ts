import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-for',
  templateUrl: './test-ng-for.component.html',
  styleUrls: ['./test-ng-for.component.css']
})
export class TestNgForComponent implements OnInit {
  public list: [string] = ['zhiq', 'aaa', 'wowo'];
  constructor() { }

  ngOnInit() {
  }

}
