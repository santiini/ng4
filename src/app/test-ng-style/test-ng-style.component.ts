import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-style',
  templateUrl: './test-ng-style.component.html',
  styleUrls: ['./test-ng-style.component.css']
})
export class TestNgStyleComponent implements OnInit {
  public currentStyles: {};
  public canSave: boolean = false;
  public cana: boolean = false;
  public canb: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': this.cana ? '700' : '400',
      'font-size': this.canb ? '20px' : '10px'
    };
  }
}
