import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  constructor(){
    moment.locale("it");
  }

  transform(date: Date | string | moment.Moment, format: string): any {
    return moment(date).format(format);
  }
}
