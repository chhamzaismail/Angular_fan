import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faTruck=faTruck;
}
