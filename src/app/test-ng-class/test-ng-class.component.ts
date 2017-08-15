import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-class',
  templateUrl: './test-ng-class.component.html',
  styleUrls: ['./test-ng-class.component.css']
})
export class TestNgClassComponent implements OnInit {
  public currentClasses: {};
  public canSave: boolean = true;
  public isUnchanged: boolean = true;
  public isSpecial: boolean = true;
  constructor() { }
  ngOnInit() {
  }
  setCurrentClasses(): void {
    this.currentClasses = {
      'saveable': this.canSave,
      'special': this.isSpecial,
      'unchanged': this.isUnchanged
    };
  }

}
