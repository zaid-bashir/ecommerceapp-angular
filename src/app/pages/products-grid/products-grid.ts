import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/products';
import { ProductCard } from "../../components/product-card/product-card";
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from '@angular/material/sidenav'
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink } from "@angular/router";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatSidenavContainer, MatSidenavContent, MatSidenav, MatNavList, MatListItem, RouterLink, TitleCasePipe],
  template: `
  <mat-sidenav-container>
    <mat-sidenav mode="side" opened="true">
      <div class="p-6">
        <h2 class="text-lg text-gray-900">Categories</h2>
        <mat-nav-list>
          @for (catItem of categories(); track catItem) {
            <mat-list-item [activated]="category() === catItem"  class="cursor-pointer my-2" [routerLink]="['/products', catItem]"  >
              <span class="font-medium" [class]="catItem === category() ? '!text-white' : null" >{{ catItem | titlecase}}</span>
            </mat-list-item>
          }  
        </mat-nav-list>
      </div>
    </mat-sidenav>
    <mat-sidenav-content class="bg-gray-100 p-6" >
       <h1 class="text-2xl font-bold text-gray-900 pb-1" >
       {{ category() | titlecase}}
      </h1>  
      <p class="pb-3" >{{filteredProducts().length}} Products Found</p>
      <div class="responsive-grid" >
    @for (product of filteredProducts(); track product.id) {
      <app-product-card [product]="product" ></app-product-card>
    }
   </div> 
    </mat-sidenav-content>
  </mat-sidenav-container>
  `,
  styles: ``,
})
export class ProductsGrid {

  //category is a reactive signal variable that holds
  //the current product category from the route parameter.
  //Default value is 'all' if no category is provided in the route.
  category = input<string>("all");

  products = signal<Product[]>(
    [
      {
        "id": "1",
        "name": "Essence Mascara Lash Princess",
        "description": "Volumizing and lengthening mascara with a long-lasting formula.",
        "price": 9.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
        "rating": 2.56,
        "reviewCount": 3,
        "inStock": true,
        "category": "beauty"
      },
      {
        "id": "2",
        "name": "Eyeshadow Palette with Mirror",
        "description": "Versatile eyeshadow palette with a built-in mirror for travel.",
        "price": 19.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
        "rating": 2.86,
        "reviewCount": 3,
        "inStock": true,
        "category": "beauty"
      },
      {
        "id": "3",
        "name": "Powder Canister",
        "description": "Lightweight translucent setting powder for a matte finish.",
        "price": 14.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
        "rating": 4.64,
        "reviewCount": 3,
        "inStock": true,
        "category": "beauty"
      },
      {
        "id": "4",
        "name": "Red Lipstick",
        "description": "Bold red lipstick with a creamy, long-lasting texture.",
        "price": 12.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
        "rating": 4.36,
        "reviewCount": 3,
        "inStock": true,
        "category": "beauty"
      },
      {
        "id": "5",
        "name": "Red Nail Polish",
        "description": "Quick-drying glossy red nail polish for a salon-quality finish.",
        "price": 8.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
        "rating": 4.32,
        "reviewCount": 3,
        "inStock": true,
        "category": "beauty"
      },
      {
        "id": "6",
        "name": "Calvin Klein CK One",
        "description": "Fresh and clean unisex fragrance suitable for daily wear.",
        "price": 49.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
        "rating": 4.37,
        "reviewCount": 3,
        "inStock": true,
        "category": "fragrances"
      },
      {
        "id": "7",
        "name": "Chanel Coco Noir",
        "description": "Elegant evening fragrance with floral and woody notes.",
        "price": 129.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
        "rating": 4.26,
        "reviewCount": 3,
        "inStock": true,
        "category": "fragrances"
      },
      {
        "id": "8",
        "name": "Dior J'adore",
        "description": "Luxurious floral fragrance symbolizing femininity.",
        "price": 89.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
        "rating": 3.8,
        "reviewCount": 3,
        "inStock": true,
        "category": "fragrances"
      },
      {
        "id": "9",
        "name": "Dolce Shine Eau de Parfum",
        "description": "Fruity fragrance with mango and jasmine notes.",
        "price": 69.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
        "rating": 3.96,
        "reviewCount": 3,
        "inStock": false,
        "category": "fragrances"
      },
      {
        "id": "10",
        "name": "Gucci Bloom",
        "description": "Modern floral fragrance with jasmine and tuberose.",
        "price": 79.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
        "rating": 2.74,
        "reviewCount": 3,
        "inStock": true,
        "category": "fragrances"
      },
      {
        "id": "11",
        "name": "Luxury Bed Frame",
        "description": "Premium wooden bed frame designed for comfort and elegance.",
        "price": 1899.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
        "rating": 4.77,
        "reviewCount": 3,
        "inStock": true,
        "category": "furniture"
      },
      {
        "id": "12",
        "name": "Designer Sofa",
        "description": "Stylish and comfortable sofa with premium upholstery.",
        "price": 2499.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
        "rating": 3.92,
        "reviewCount": 3,
        "inStock": true,
        "category": "furniture"
      },
      {
        "id": "13",
        "name": "Bedside Table African Cherry",
        "description": "Elegant bedside table with storage space.",
        "price": 299.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
        "rating": 2.87,
        "reviewCount": 3,
        "inStock": true,
        "category": "furniture"
      },
      {
        "id": "14",
        "name": "Executive Conference Chair",
        "description": "Ergonomic office chair with a modern design.",
        "price": 499.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
        "rating": 4.88,
        "reviewCount": 3,
        "inStock": true,
        "category": "furniture"
      },
      {
        "id": "15",
        "name": "Wooden Bathroom Sink",
        "description": "Stylish wooden bathroom sink with matching mirror.",
        "price": 799.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
        "rating": 3.59,
        "reviewCount": 3,
        "inStock": false,
        "category": "furniture"
      },
      {
        "id": "16",
        "name": "Fresh Apples",
        "description": "Crisp and fresh apples perfect for snacks.",
        "price": 1.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
        "rating": 4.19,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "17",
        "name": "Beef Steak",
        "description": "High-quality beef steak ideal for grilling.",
        "price": 12.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
        "rating": 4.47,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "18",
        "name": "Cat Food",
        "description": "Nutritious food formulated for cats.",
        "price": 8.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
        "rating": 3.13,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "19",
        "name": "Chicken Meat",
        "description": "Fresh chicken meat for everyday cooking.",
        "price": 9.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
        "rating": 3.19,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "20",
        "name": "Cooking Oil",
        "description": "All-purpose cooking oil for frying and sautéing.",
        "price": 4.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
        "rating": 4.8,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },

      /* ---- Extended Products (21–40) ---- */

      {
        "id": "21",
        "name": "Cucumber",
        "description": "Fresh and hydrating cucumbers for salads.",
        "price": 1.49,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
        "rating": 4.07,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "22",
        "name": "Dog Food",
        "description": "Balanced nutrition for dogs of all sizes.",
        "price": 10.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
        "rating": 4.55,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "23",
        "name": "Eggs",
        "description": "Fresh farm eggs for cooking and baking.",
        "price": 2.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
        "rating": 2.53,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "24",
        "name": "Fish Steak",
        "description": "Premium fish steaks for healthy meals.",
        "price": 14.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
        "rating": 3.78,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "25",
        "name": "Green Bell Pepper",
        "description": "Fresh green bell peppers full of flavor.",
        "price": 1.29,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
        "rating": 3.25,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "26",
        "name": "Green Chili Pepper",
        "description": "Spicy green chilies for added heat.",
        "price": 0.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
        "rating": 3.66,
        "reviewCount": 3,
        "inStock": false,
        "category": "groceries"
      },
      {
        "id": "27",
        "name": "Honey Jar",
        "description": "Pure natural honey in a glass jar.",
        "price": 6.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
        "rating": 3.97,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "28",
        "name": "Ice Cream",
        "description": "Creamy ice cream available in multiple flavors.",
        "price": 5.49,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
        "rating": 3.39,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "29",
        "name": "Fruit Juice",
        "description": "Refreshing fruit juice packed with vitamins.",
        "price": 3.99,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
        "rating": 3.94,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "30",
        "name": "Kiwi",
        "description": "Fresh nutrient-rich kiwi fruit.",
        "price": 2.49,
        "imageUrl": "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
        "rating": 4.93,
        "reviewCount": 3,
        "inStock": true,
        "category": "groceries"
      },
      {
        "id": "32",
        "name": "Smart Watch Pro",
        "description": "Fitness tracking smartwatch with heart-rate monitor.",
        "price": 149.99,
        "imageUrl": "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
        "rating": 4.7,
        "reviewCount": 210,
        "inStock": true,
        "category": "electronics"
      },
      {
        "id": "35",
        "name": "Mechanical Keyboard",
        "description": "Mechanical keyboard with tactile switches.",
        "price": 129.99,
        "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        "rating": 4.8,
        "reviewCount": 64,
        "inStock": true,
        "category": "electronics"
      },
      {
        "id": "36",
        "name": "Laptop Stand",
        "description": "Adjustable aluminum laptop stand for better ergonomics.",
        "price": 39.99,
        "imageUrl": "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
        "rating": 4.3,
        "reviewCount": 54,
        "inStock": true,
        "category": "electronics"
      },
      {
        "id": "37",
        "name": "Desk Lamp LED",
        "description": "Energy-efficient LED desk lamp with brightness control.",
        "price": 29.99,
        "imageUrl": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
        "rating": 4.2,
        "reviewCount": 88,
        "inStock": true,
        "category": "home"
      },
      {
        "id": "38",
        "name": "Office Desk",
        "description": "Modern wooden office desk with storage drawers.",
        "price": 349.99,
        "imageUrl": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
        "rating": 4.5,
        "reviewCount": 42,
        "inStock": true,
        "category": "furniture"
      },
      {
        "id": "39",
        "name": "Bookshelf",
        "description": "Minimalist bookshelf for home and office.",
        "price": 199.99,
        "imageUrl": "https://images.unsplash.com/photo-1503602642458-232111445657",
        "rating": 4.4,
        "reviewCount": 39,
        "inStock": true,
        "category": "furniture"
      },
      {
        "id": "40",
        "name": "Floor Plant",
        "description": "Decorative indoor plant for modern interiors.",
        "price": 59.99,
        "imageUrl": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
        "rating": 4.7,
        "reviewCount": 91,
        "inStock": true,
        "category": "home"
      }
    ]

  );

  filteredProducts = computed(() => {
    if (this.category() === 'all') {
      return this.products();
    }
    return this.products().filter(product => product.category.toLowerCase() === this.category().toLowerCase());
  });

  categories = computed(() => Array.from(new Set(this.products().map(product => product.category)).add('all')));
}
