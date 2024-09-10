import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})

  export class SortByPricePipe implements PipeTransform {
    transform(FIGURINES: any[], sortOrder: 'asc' | 'desc'): any[] {
      return FIGURINES.slice().sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      });
    }
  }