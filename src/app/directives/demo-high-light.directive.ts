import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[demo-high-light]'
})
export class DemoHighLightDirective {

  constructor(private el: ElementRef) {
    console.log(el);
    el.nativeElement.style.backgroundColor = '#ff3300';
  }

}
