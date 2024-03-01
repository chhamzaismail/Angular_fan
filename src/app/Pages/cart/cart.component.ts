import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productQuantity:number = 1;
  price:any =5999;
  increaseValue(value:any,price1:any) {
    
   if(this.productQuantity <10 ){
    this.productQuantity +=1;
   this.price =  this.productQuantity * price1;
   }
  }
  decreaseValue(value:any,price1:any) {
    if(this.productQuantity >1 ){
      this.productQuantity -=1;
      this.price =  this.productQuantity * price1;
     }
  }
}
