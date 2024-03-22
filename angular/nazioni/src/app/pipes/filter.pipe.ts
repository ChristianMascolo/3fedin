import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(len: any[]): string[] {
    let strings: string[] = [];
    console.log(len);
    len.forEach((element : string) => {
      strings.push(element);
    });
    return strings;
  }

}
