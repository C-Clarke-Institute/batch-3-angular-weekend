import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

  @Input()
  title: string = 'Title';

  @Input()
  price: number = 0;

  onClick() {
    alert( this.title );
  }
}
