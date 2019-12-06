import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputError]'
})
export class InputErrorDirective {
  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = 'red';
  }
}