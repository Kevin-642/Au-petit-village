import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from '../product/productlist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductlistComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
