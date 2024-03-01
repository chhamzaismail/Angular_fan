import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './Pages/nav/nav.component';
import { HeaderComponent } from './Pages/header/header.component';
import { BannerMainSwipperComponent } from './Pages/banner-main-swipper/banner-main-swipper.component';
import { FooterComponent } from './Pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent, HeaderComponent, BannerMainSwipperComponent, BannerMainSwipperComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fans';
}
