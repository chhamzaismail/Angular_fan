import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { CartComponent } from './Pages/cart/cart.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';

export const routes: Routes = [
    {path:'', component: HomeComponent, title: 'Home Page'},
    {path:'product', component: ProductsComponent, title: 'Product Page'},
    {path:'product_details', component: ProductDetailsComponent, title: 'Product Detail'},
    {path:'cart', component: CartComponent, title: 'Product Cart'},
    {path:'checkout', component: CheckoutComponent, title: 'Product Checkout'},
];
