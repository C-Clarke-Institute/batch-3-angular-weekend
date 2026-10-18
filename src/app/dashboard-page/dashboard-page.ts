import { Component } from '@angular/core';
import { Product } from '../product/product';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-dashboard-page',
  imports: [Product, FormsModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {
  searchText: string = 'Hello';

  text: string = 'Search Text';
  title: string = 'Search Text';
  price: number = 0.00;
  stock: number = 0;
  discount: number = 0;

  products: IProduct[] = [
    { title: 'Laptop', price: 100.20 , stock: 10, discount: 0, date: new Date('2026-05-23T08:56:21.618Z')} as IProduct,
    { title: 'Mobile', price: 50.50, stock: 0, discount: 10, date: new Date('2026-06-23T08:56:21.618Z')} as IProduct,
    { title: 'Watch', price: 80.11, stock: 5, discount: 10, date: new Date('2026-06-23T08:56:21.618Z')} as IProduct,
  ];

  handleInputChange(event: any) {
    this.searchText = event.target.value;
  }






}
