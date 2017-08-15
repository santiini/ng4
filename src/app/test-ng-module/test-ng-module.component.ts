import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-module',
  templateUrl: './test-ng-module.component.html',
  styleUrls: ['./test-ng-module.component.css']
})
export class TestNgModuleComponent implements OnInit {
  public currentRace: any = { name: '随机种族' };
  constructor() { }

  ngOnInit() {
  }

}
