import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: number): string {
    const formattedPrice = '$' + value.toFixed(2);
    return formattedPrice;
  }
}
