import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
import * as _ from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortbyPipe implements PipeTransform {

  transform(array: Array<{}>, args: string[]): Array<string> | Array<{}> {

    array = array || [];

    if (typeof args === 'undefined' || args.length !== 2) {
        return array;
    }

    const [key, direction] = args;

    if (direction !== 'ASC' && direction !== 'DESC') {
        return array;
    }

    return _.orderBy(array, (item:any) => item[key], direction.toLowerCase());
}

  // transform(value: any[], order = '', column: string = ''): any[] {
  //   if (!value || order === '' || !order) { return value; } // no array
  //   if (value.length <= 1) { return value; } // array with only one item
  //   if (!column || column === '') { 
  //     if(order==='asc'){return value.sort()}
  //     else{return value.sort().reverse();}
  //   } // sort 1d array
  //   return orderBy(value, [column], [order]);
  // }

}
