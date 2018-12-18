import { Component } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Dell Inspiron 15 7000',
      description: 'Whether it’s fast-paced racing or action-packed roleplay, the Dell Inspiron 15 laptop is designed to make your gaming experience truly delightful',
      price: 45000,
      isAvailable: false
    },
    {
      id: 2,
      name: 'Dell Vostro',
      description: 'Vostro description',
      price: 35000,
      isAvailable: true
    },
    {
      id: 3,
      name: 'Dell XPS',
      description: 'Dell XPS description',
      price: 95000,
      isAvailable: true
    }
  ];

  onProductCreated(product: Product) {
    this.products.unshift(product);
    console.log('Products.onProductCreated() event handler invoked');
  }
}
