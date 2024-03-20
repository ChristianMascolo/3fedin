import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFlag'
})
export class SearchFlagPipe implements PipeTransform {

  transform(value: any[], prop: string): any {
    return value.filter(el => el[prop] );
  }
}
