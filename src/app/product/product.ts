import { Component, Input } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass, NgStyle } from '@angular/common';
import { AppHighlight } from '../app-highlight';

@Component({
  selector: 'app-product',
  imports: [NgClass, NgStyle, AppHighlight, DatePipe, CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  @Input()
  title: string = 'Title';

  @Input()
  price: number = 0;

  @Input()
  stock: number = 0;

  @Input()
  discount: number = 0;

  @Input()
  date: Date = new Date();

  fontSize: number = 24;

  constructor() {}

  onClick() {
    alert(this.title);
  }

  onIncrement() {
    this.fontSize += 2;
  }
}
