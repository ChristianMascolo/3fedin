import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthFilter'
})
export class MonthFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
