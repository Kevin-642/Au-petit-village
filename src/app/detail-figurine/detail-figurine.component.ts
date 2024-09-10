import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FIGURINES } from '../product/figurine-list';
import { Figurine } from '../product/figurine';


@Component({
  selector: 'app-detail-figurine',
  templateUrl: './detail-figurine.component.html',
  styleUrl: './detail-figurine.component.css'
})
export class DetailFigurineComponent implements OnInit {

figurineList: Figurine[];
figurine: Figurine|undefined;

constructor(private route: ActivatedRoute) { }

ngOnInit() {
  this.figurineList = FIGURINES;
  const figurineId: string|null = this.route.snapshot.paramMap.get('id');
  if(figurineId) {
    this.figurine = this.figurineList.find(figurine => figurine.id == +figurineId)
   } 
  }

}
