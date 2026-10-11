import { Component } from '@angular/core';
import { Product } from '../product/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-page',
  imports: [Product, FormsModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {
  searchText: string = 'Hello';

  text: string = 'Search Text';

  handleInputChange(event: any) {
    this.searchText = event.target.value;
  }
}
