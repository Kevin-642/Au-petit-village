import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(FIGURINES: any[], searchText: string): any[] {
    if (!FIGURINES || !searchText) {
      return FIGURINES;
    }

    searchText = searchText.toLowerCase(); 

    return FIGURINES.filter((Figurine) =>
      Figurine.name.toLowerCase().includes(searchText)
    );
  }
}
