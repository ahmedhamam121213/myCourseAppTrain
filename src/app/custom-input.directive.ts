import { Directive , HostListener, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appCustomInput]'
})
export class CustomInputDirective {

  @Input('appCustomInput') format; 
  constructor( private el : ElementRef ) { }

 

  @HostListener('blur') onBlur(){
    let value : string = this.el.nativeElement.value;

    if( this.format == 'uppercase' ){
      this.el.nativeElement.value = value.toLowerCase();
    }else{
      this.el.nativeElement.value = value.toUpperCase();
    }
    

    
  }

  

}
