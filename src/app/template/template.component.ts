import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  a: string = 'background:red';
  isSpecial: boolean = true;
  classes: string = 'aaaaa';
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  public fontSizePx: number = 14;
  constructor() { }

  ngOnInit() {
  }

  onSave(event): void {
    console.log(event.target);
  }

}
