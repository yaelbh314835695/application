import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  products: any[] | undefined;
  maxPrice: number | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts(this.maxPrice).subscribe((products: any[]) => {
      this.products = products;
    });

  }
  // products = [
  //   { id: 1, name: 'Product 1', price: 10.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
  //   { id: 2, name: 'Product 2', price: 19.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
  //   { id: 3, name: 'Product 3', price: 8.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
  //   { id: 4, name: 'Product 4', price: 8.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
  //   { id: 5, name: 'Product 5', price: 8.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
  //   { id: 6, name: 'Product 6', price: 8.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
  //   { id: 7, name: 'Product 7', price: 8.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
  //   { id: 8, name: 'Product 8', price: 8.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
  //   { id: 9, name: 'Product 9', price: 8.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' }
  //   // Add more products here
  // ];

  cartItems: any[] = [];

  onAddToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.amount++;
    } else {
      const newItem = { ...product, amount: 1 };
      this.cartItems.push(newItem);
    }
  }
  onDeleteToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      if (existingItem.amount > 1)
        existingItem.amount--;
      else {
        const indexOfProduct = this.cartItems.findIndex((item) => item.id === existingItem.id);
        this.cartItems.splice(indexOfProduct, 1)
      }
    }
  }
}