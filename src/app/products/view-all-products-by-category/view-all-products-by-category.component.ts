import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import {Product} from '../product';
import { Category } from 'src/app/site-framework/category';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {
searchCategory:Category;
productList: Product;
  constructor(private activatedroute :ActivatedRoute,
              private productService: ProductsService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>{
      this.searchCategory= data.id;

    this.productService.searchCategoryProducts(this.searchCategory).subscribe(categorydata=>{
      this.productList=categorydata;
    });

    });
  }

}
