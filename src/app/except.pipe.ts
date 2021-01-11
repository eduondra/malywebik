import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string): any {

    const reminder = '...';

    if (value.length > 3) {
      return value.substring(0, 3) + reminder;
    } else { return value; }
  }

}
