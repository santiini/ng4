import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-test-fly-in',
  templateUrl: './test-fly-in.component.html',
  styleUrls: ['./test-fly-in.component.css'],
  animations: [flyIn]
})
export class TestFlyInComponent implements OnInit {
  state: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  show() {
    this.state = true;
  }
  hide() {
    this.state = false;
  }
}
