import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linearConvert'
})
export class LinearConvertPipe implements PipeTransform {

  transform(value: number, convertRate: number): number {
    return value * convertRate
  }

}
