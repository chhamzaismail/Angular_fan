import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BannerMainSwipperComponent } from '../banner-main-swipper/banner-main-swipper.component';
import { BannerInnerSwipperComponent } from '../banner-inner-swipper/banner-inner-swipper.component';
import { ProductsSwipperComponent } from '../products-swipper/products-swipper.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerMainSwipperComponent,BannerInnerSwipperComponent,ProductsSwipperComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}
