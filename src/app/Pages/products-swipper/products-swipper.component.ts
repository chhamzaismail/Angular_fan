import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener } from '@angular/core';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-swipper',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products-swipper.component.html',
  styleUrl: './products-swipper.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsSwipperComponent {
  slidesPerView:number = 4;
  screenwidth !: number;
  @HostListener("window:resize")
  getScreenWidth(){
    this.screenwidth = window.innerWidth;
    if(this.screenwidth >=320 && this.screenwidth <= 596){
      this.slidesPerView = 1;
    }
    else if(this.screenwidth >=596 && this.screenwidth <= 778){
      this.slidesPerView = 2;
    }
    else if(this.screenwidth >=778 && this.screenwidth <= 992){
      this.slidesPerView = 2;
    }
    else if(this.screenwidth >=992 && this.screenwidth <= 1180){
      this.slidesPerView = 3;
    }
  }
}
