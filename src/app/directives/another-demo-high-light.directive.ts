import { Directive, Input, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[another-demo-high-light]'
})
export class AnotherDemoHighLightDirective {
  @Input()
  highLightColor: string;
  @HostBinding('style.border')
  border: string;
  constructor(private el: ElementRef) {
  }

  highLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') mouseenter() {
    this.highLight(this.highLightColor);
  }
  @HostListener('mouseleave') mouseleave() {
    this.highLight(null);
  }
  @HostListener('click') click() {
    if (this.border) {
      this.border = '';
    } else {
      this.border = '1px solid green';
    }
  }
}
