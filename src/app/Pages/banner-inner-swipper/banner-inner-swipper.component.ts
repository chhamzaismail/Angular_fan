import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-banner-inner-swipper',
  standalone: true,
  imports: [],
  templateUrl: './banner-inner-swipper.component.html',
  styleUrl: './banner-inner-swipper.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerInnerSwipperComponent {
  slidesPerView:number = 5;
  screenwidth !: number;
  @HostListener("window:resize")
  getScreenWidth(){
    this.screenwidth = window.innerWidth;
    if(this.screenwidth >=320 && this.screenwidth <= 480){
      this.slidesPerView = 2;
    }
    else if(this.screenwidth >=480 && this.screenwidth <= 778){
      this.slidesPerView = 3;
    }
    else if(this.screenwidth >=778 && this.screenwidth <= 992){
      this.slidesPerView = 4;
    }
  }
}
