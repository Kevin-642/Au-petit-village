import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[figurineBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    this.setBorder('#FDD90B');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#DA001E');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#FDD90B');
  }

  setBorder(color: string) {
      this.el.nativeElement.style.border = `solid 3px ${color}`;
    }
  }


