import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-temp-ref-var',
  templateUrl: './test-temp-ref-var.component.html',
  styleUrls: ['./test-temp-ref-var.component.css']
})
export class TestTempRefVarComponent implements OnInit {

  public sayHello(name: string) {
    alert(`hello,${name}`);
  }
  constructor() { }

  ngOnInit() {
  }

}
