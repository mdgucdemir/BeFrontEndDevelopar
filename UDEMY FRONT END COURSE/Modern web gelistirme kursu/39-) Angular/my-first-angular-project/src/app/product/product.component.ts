import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service'; // kullanilacak service ekleme
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService], // local service dahil edilmesi
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {} // service i kullanmak icin. Normalde default olarak constructor gelmemisti ben ekledim.

  title: string = 'Products List';
  filterText = '';
  products!: Product[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productService
        .getProducts(params['categoryId'])
        .subscribe((data) => {
          this.products = data;
        });
    });
  }

  addToCart(product: any) {
    this.alertifyService.success(product.name + ' Added');
  }
}
