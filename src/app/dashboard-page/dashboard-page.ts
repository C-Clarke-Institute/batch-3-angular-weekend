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
    { title: 'Laptop', price: 100 , stock: 10, discount: 0} as IProduct,
    { title: 'Mobile', price: 50, stock: 0, discount: 10} as IProduct,
    { title: 'Watch', price: 80, stock: 5, discount: 10} as IProduct,
  ];

  handleInputChange(event: any) {
    this.searchText = event.target.value;
  }






}
