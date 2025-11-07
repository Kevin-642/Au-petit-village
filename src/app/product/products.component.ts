import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FIGURINES } from './figurine-list';
import { Figurine } from './figurine';
import { FilterByNamePipe } from '../home/filter-by-name-pipe';
import { SortByPricePipe } from '../home/sort-by-price.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FilterByNamePipe,
    SortByPricePipe
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  figurineList: Figurine[] = FIGURINES;
  figurineSelected?: Figurine;
  searchText = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private router: Router) {}

  ngOnInit() {
    console.table(this.figurineList);
  }

  goToFigurine(figurine: Figurine) {
    this.router.navigate(['/figurine', figurine.id]);
  }

  selectFigurine(figurineId: string) {
    this.figurineSelected = this.figurineList.find(f => f.id === +figurineId);
  }
}
