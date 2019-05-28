import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cinemam';
  constructor(
    private router: Router
  ) { }

  @HostListener('window:wheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {

    // Scroll down
    if (evento.deltaY > 0) {
      switch (this.router.url) {
        case '/home': {
          this.router.navigate(['/campaigns'])
          break
        }
        case '/campaigns': {
          this.router.navigate(['/contact'])
          break
        }
        case '/contact': {
          break
        }
      }
    } else { // Scroll up
      switch (this.router.url) {
        case '/home': {
          break
        }
        case '/campaigns': {
          this.router.navigate(['/home'])
          break
        }
        case '/contact': {
          this.router.navigate(['/campaigns'])
          break
        }
      }
    }
  }


}
