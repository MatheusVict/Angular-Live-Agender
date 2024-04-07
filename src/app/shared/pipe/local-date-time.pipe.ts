import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'localDateTime',
  standalone: true
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    let dateOut: moment.Moment = moment(date, "YYYY-MM-DDTHH:mm:ss");
    return dateOut.format("DD/MM/YYYY HH:mm");
  }

}
