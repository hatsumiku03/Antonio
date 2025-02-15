import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormtraComponent } from './formtra/formtra.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormtraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A treballar 😈';
}
