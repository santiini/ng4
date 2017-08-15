import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-if',
  templateUrl: './test-ng-if.component.html',
  styleUrls: ['./test-ng-if.component.css']
})
export class TestNgIfComponent implements OnInit {
  public isShow: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  public toggleShow() {
    return this.isShow = !this.isShow;
  }
}
