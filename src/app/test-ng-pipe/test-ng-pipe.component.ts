import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-pipe',
  templateUrl: './test-ng-pipe.component.html',
  styleUrls: ['./test-ng-pipe.component.css']
})
export class TestNgPipeComponent implements OnInit {
  public currentTime: Date = new Date();
  constructor() {
    setInterval(
      () => { this.currentTime = new Date; }
      , 1000);
  }

  ngOnInit() {
  }

}
