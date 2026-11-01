import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    '(mouseenter)' : 'onHighlight()',
    '(mouseleave)' : 'onRemoveHighlight()'
  }
})
export class AppHighlight {

  @Input('highlight') highlight: any;
  @Input('color') color: any;

  constructor(private el: ElementRef, private renderer: Renderer2 ) { }


  onHighlight() {
    console.log('Highlight add');
    this.renderer.setStyle(
      this.el.nativeElement, 'background-color', this.highlight ? this.highlight : 'yellow'
    );
    this.renderer.setStyle(
      this.el.nativeElement, 'color', this.color ? this.color : 'black'
    );
  }
  onRemoveHighlight() {
    console.log('Highlight removed');
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    this.renderer.removeStyle(this.el.nativeElement, 'color');
  }
}
