import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event-binding',
  templateUrl: './test-event-binding.component.html',
  styleUrls: ['./test-event-binding.component.css']
})
export class TestEventBindingComponent implements OnInit {
  public btnClick(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
