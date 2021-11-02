import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;

  constructor() {
    this.products = [
      {productId: 1, productName: 'Canon EOS 3000D', price: 24999, ratings: 4.4, imagePath: './assets/images/canon-eos-3000d.jpeg'},
      {productId: 2, productName: 'Canon EOS 1500D', price: 31999, ratings: 4.5, imagePath: './assets/images/canon-eos-1500d.jpeg'},
      {productId: 3, productName: 'Canon EOS 80D', price: 89999, ratings: 4.5, imagePath: './assets/images/canon-eos-80d.jpeg'},
      {productId: 4, productName: 'Canon EOS 7D', price: 99999, ratings: 4.1, imagePath: './assets/images/canon-eos-7d.jpeg'},
      {productId: 5, productName: 'Nikon D850', price: 201999, ratings: 4.4, imagePath: './assets/images/nikon-d850.jpeg'},
    ]
  }

  ngOnInit(): void {
  }

  objectKeys(args:any) {
    return Object.keys(args);
  }

}
