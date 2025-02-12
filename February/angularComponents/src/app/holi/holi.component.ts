import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-holi',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './holi.component.html',
  styleUrl: './holi.component.css'
})
export class HoliComponent {
  title = 'holi';
}
