import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  private backgroundColor: string;
  @Input() defaultColor = '#FFFFFF';
  @Input('appHighlight') highlightColor = '#FF5335';
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  constructor() {
    // this.elementRef.nativeElement.style.backgroundColor = '#FF5335';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', '#FF5335');
  }
  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }

}
