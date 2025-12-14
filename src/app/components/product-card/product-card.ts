import { Component, input, output } from '@angular/core';
import { Product } from '../../models/products';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-product-card',
  imports: [MatAnchor, MatIcon],
  template: `
   <div class="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full" >
        <img 
          [src]="product().imageUrl"
          class="w-full h-[300px] object-cover rounded-t-xl">
        <div class="p-5 flex flex-col flex-1" >
          <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight" >
            {{ product().name }}
          </h3>
          <p class="text-gray-600 text-sm mb-4 flex-1 leading-relaxed" >
            {{ product().description }}
          </p>

          <!-- TODO: Add rating stars here -->

          <div>{{product().inStock ? 'In Stock' : 'Out of Stock'}}</div>
          <div class="flex items-center justify-between mt-auto" >
            <span class="text-2xl font-bold text-gray-900" >\$ {{ product().price.toFixed(2) }}</span>
            <button matButton="filled" class="flex items-center gap-2" >
              <mat-icon>shopping_cart</mat-icon>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
  `,
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();
  addToCartClicked = output<Product>();
}
