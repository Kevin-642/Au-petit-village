import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Figurine } from './figurine';
import { FIGURINES } from './figurine-list';
import { FilterByNamePipe } from '../home/filter-by-name-pipe';
import { SortByPricePipe } from '../home/sort-by-price.pipe';
import { BorderCardDirective } from './border-card.directive';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FilterByNamePipe,
    SortByPricePipe,
    BorderCardDirective
  ],
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  figurineList: Figurine[] = FIGURINES;
  searchText: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';
  figurineSelected?: Figurine;

  ngOnInit() {
    console.table(this.figurineList);
  }

  selectFigurine(figurineId: string) {
    this.figurineSelected = this.figurineList.find(f => f.id === +figurineId);
  }
}
