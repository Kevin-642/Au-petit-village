import { Component, OnInit } from '@angular/core';
import { FIGURINES } from './figurine-list';
import { Figurine } from './figurine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrl: 'products.component.css'
})

export class ProductsComponent implements OnInit {
  figurineList: Figurine[] = FIGURINES;
  figurineSelected: Figurine|undefined;
  searchText = '';
  FIGURINES: any[] = [];
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private router: Router) {}

  goToFigurine(figurine: Figurine) {
    this.router.navigate(['/figurine', figurine.id]);
  }

  ngOnInit() {
      console.table(this.figurineList);
  }

  getFIGURINES(): any[] {
    return this.FIGURINES;
  }

  selectFigurine(figurineId: string) {
    const figurine: Figurine|undefined = this.figurineList.find(figurine => figurine.id == +figurineId);
  }
}
