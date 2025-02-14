import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpresaurioComponent } from './empresaurio/empresaurio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmpresaurioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MrEmpresas';
}
