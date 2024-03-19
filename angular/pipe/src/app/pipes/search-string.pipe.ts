import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchString'
})
export class SearchStringPipe implements PipeTransform {

  transform(value: any[],prop:string, toSearch: any): any {
    return value.filter(el => el[prop] == toSearch);
  }
}
