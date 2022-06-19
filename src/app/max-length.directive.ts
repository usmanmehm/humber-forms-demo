import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appMaxLength]'
})
export class MaxLengthDirective {
  @Input() formCtrl!: FormControl | any;
  @Input() maxLength = 10;
  constructor() { }

  @HostListener('input') onInput() {
    if (this.formCtrl) {
      const value = this.formCtrl.value;

      const finalValue = value.substring(0,this.maxLength);
      this.formCtrl.setValue(finalValue)
    }
  } 
}
