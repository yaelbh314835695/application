import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  maxPrice: any | undefined;

  @Input() products: any[] | undefined;
  @Output() addToCart: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteToCart: EventEmitter<any> = new EventEmitter<any>();
  constructor(private productService: ProductService) { }


  ngOnInit() {
    this.refreshProducts();
  }

  onFilterClick() {
    this.refreshProducts();
  }

  private refreshProducts() {
    this.productService.getProducts(this.maxPrice).subscribe((products: any[]) => {
      this.products = products;
    });
  }
  onAddToCart(product: any) {
    this.addToCart.emit(product);
  }
  onDeleteToCart(product: any) {
    this.deleteToCart.emit(product);
  }
}