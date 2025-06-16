import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appImgStyle]'
})
export class ImgStyle implements OnInit, OnChanges{
  @Input() 
  color1:string='red'

  constructor(
     public elementRef:ElementRef
  ) {
    // this.elementRef.nativeElement.style.border='2px solid'
    // this.elementRef.nativeElement.style.borderRadius='10px'
    // this.elementRef.nativeElement.style.boxShadow='10px 10px 5px 5px gray'
  }
  ngOnInit(): void {
    // this.elementRef.nativeElement.style.border='2px solid red'
    // this.elementRef.nativeElement.style.borderRadius='10px'
    // this.elementRef.nativeElement.style.boxShadow='10px 10px 5px 5px gray'
  }
  ngOnChanges(): void {
    this.elementRef.nativeElement.style.boxShadow='10px 10px 5px 5px '
    this.elementRef.nativeElement.style.border=`px solid ${this.color1}`
    this.elementRef.nativeElement.style.borderRadius='10px'
  }
  @HostListener('mouseover') mouseOver(){
    this.elementRef.nativeElement.style.border='2px dashed blue'
    this.elementRef.nativeElement.style.borderRadius='5px'
  }
  @HostListener('mouseout') mouseout(){
    this.elementRef.nativeElement.style.border='2px solid black'
    this.elementRef.nativeElement.style.borderRadius='10px'
  }
}
