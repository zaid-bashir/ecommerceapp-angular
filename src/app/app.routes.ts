import { Routes } from '@angular/router';

export const routes: Routes = [
    // Redirect empty path to products, When User comes
    // to root page, he should be redirected to products 
    // path automatically
    {
        path: "",
        redirectTo: "products/all",
        pathMatch: "full"
    },
    {
        path: 'products/:category',
        loadComponent: () => import('./pages/products-grid/products-grid').then(m => m.ProductsGrid)
    },
    {
        path: "wishlist",
        loadComponent: () => import('./pages/my-wishlist/my-wishlist').then(m=>m.MyWishlist)
    }
];
