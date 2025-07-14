import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/auth.service'; // Adjust path based on your project structure
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '11xplay';
  isLoggedIn$!: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
  
  bannerImages = [
    { src: 'assets/images/banner1.png', alt: 'Banner 1' },
    { src: 'assets/images/banner2.png', alt: 'Banner 2' },
    { src: 'assets/images/banner3.png', alt: 'Banner 3' },
    { src: 'assets/images/banner4.png', alt: 'Banner 4' }
  ];

}
