import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
   @Input() getColor:string='';
  constructor(private ele:ElementRef) { }

  //HostListener (event detect monitor), HostBinding(value)
 @HostBinding('style.border')
 border='2px solid'

  @HostListener('mouseleave')
  mouseLeave(){
    //  this.ele.nativeElement.style.color='yellow';
    this.ele.nativeElement.style.color=this.getColor;
  }

  @HostListener('mouseenter')
  mouseEnter(){
     this.ele.nativeElement.style.color='red';
  }

  @HostListener('document:visibilitychange')
  visibilitychange(){
    // alert('session timeout');
    console.log("session")
  }

}
