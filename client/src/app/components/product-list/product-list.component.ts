import { Component } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      console.log(res);
    });
  }

  deleteProduct(id: string | undefined) {
    console.log(id);
    this.productService.deleteProduct(id).subscribe((res) => {
      console.log(res);
      this.getProductList();
    });
  }
}
