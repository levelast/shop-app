import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  private static readonly CLASS_NAME = 'open';
  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click')
  toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}
