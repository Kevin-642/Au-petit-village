import { Pipe, PipeTransform } from '@angular/core';
import { StandalonePipe } from '@angular/core'; // facultatif mais utile pour clarté

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {
  transform(FIGURINES: any[], searchText: string): any[] {
    if (!FIGURINES || !searchText) {
      return FIGURINES;
    }

    searchText = searchText.toLowerCase();

    return FIGURINES.filter((figurine) =>
      figurine.name.toLowerCase().includes(searchText)
    );
  }
}
