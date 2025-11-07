import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ProductlistComponent } from './app/product/productlist.component';
import { DetailFigurineComponent } from './app/detail-figurine/detail-figurine.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'figurine/:id', component: DetailFigurineComponent },
  { path: '**', component: PageNotFoundComponent }
];
