import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products = [
    { id: 1, name: 'Product 1', price: 10.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 2, name: 'Product 2', price: 19.29, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 3, name: 'Product 3', price: 8.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 4, name: 'Product 4', price: 17.79, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 5, name: 'Product 5', price: 5.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 6, name: 'Product 6', price: 3.89, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 7, name: 'Product 7', price: 23.99, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 8, name: 'Product 8', price: 4.59, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' },
    { id: 9, name: 'Product 9', price: 56.49, image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg' }
  ];
  apiUrl: any;

  getProducts(maxPrice?: number): Observable<any[]> {
    let filteredProducts = this.products;
    
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
    }
    
    return of(filteredProducts);
  }
}
