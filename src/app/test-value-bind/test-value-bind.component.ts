import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-value-bind',
  templateUrl: './test-value-bind.component.html',
  styleUrls: ['./test-value-bind.component.css']
})
export class TestValueBindComponent implements OnInit {
  public imgSrc: string = './assets/imgs/1.jpg';
  public changeSrc(): void {
    if (Math.ceil(Math.random() * 10000000) % 2) {
      this.imgSrc = './assets/imgs/2.jpg';
    } else {
      this.imgSrc = './assets/imgs/1.jpg';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
