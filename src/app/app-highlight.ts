import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    '(mouseenter)' : 'onHighlight()',
    '(mouseleave)' : 'onRemoveHighlight()'
  }
})
export class AppHighlight {

  constructor(private el: ElementRef, private renderer: Renderer2 ) { }


  onHighlight() {
    console.log('Highlight add');
    this.renderer.setStyle(
      this.el.nativeElement, 'background-color', 'yellow'
    );
  }
  onRemoveHighlight() {
    console.log('Highlight removed');
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
