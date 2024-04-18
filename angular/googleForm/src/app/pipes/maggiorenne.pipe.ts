import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maggiorenne'
})
export class MaggiorennePipe implements PipeTransform {

  transform(value: any[]): any {
    return value.filter(item => item.age > 18);
  }

}
