import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {
  @Input('appMyHighlight') highlightColor: string;
  @Input() defaultColor: string;
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor || this.defaultColor || 'orange');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
