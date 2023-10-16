import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpened=false;

  @HostListener('document:click', ['$event'])toggleOpen(event:Event){
    this.isOpened = this.elRef.nativeElement.contains(event.target) ? !this.isOpened : false;
  }

  constructor(private elRef:ElementRef) { }

}
