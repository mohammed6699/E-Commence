import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value:string):string {
    return `${value.slice(0,4)}-${value.slice(4,8)}-${value.slice(8,12)}-${value.slice(12,16)}`;
  }

}
