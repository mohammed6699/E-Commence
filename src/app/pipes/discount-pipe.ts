import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value:number, disc:number): number {
    let desValue = disc/100
    let valueBeforeDis = desValue*value
    let finalValue = value-valueBeforeDis
    return finalValue;
  }

}
