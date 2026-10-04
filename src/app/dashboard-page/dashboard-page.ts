import { Component } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-dashboard-page',
  imports: [ Product ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {}
