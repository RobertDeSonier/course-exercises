import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sortProp: string) {
    return value.sort((x, y) => x.name.localeCompare(y.name));
  }

}
