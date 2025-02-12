import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet,Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angularComponents';
  mainPage = true;
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mainPage = event.urlAfterRedirects === '/';
      }
    });
}
}
