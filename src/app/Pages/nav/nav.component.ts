import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  faTruck= faTruck;
  // faFacebook= faFacebook;
}
