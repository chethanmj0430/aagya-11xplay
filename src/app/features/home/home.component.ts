import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';
import { Router, RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../../shared/sidenav.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, SidenavComponent, RouterOutlet]
})
export class HomeComponent implements AfterViewInit {
    @ViewChild('tabContainer') tabContainer!: ElementRef;
    scrollAmount: number = 200; // Adjust this value to control scroll distance

    constructor() {}

    ngAfterViewInit() {
        // You might want to check for overflow here and show/hide arrows
        // if the content is not actually overflowing.
    }

    scrollTabs(direction: 'left' | 'right') {
        if (this.tabContainer) {
            const container = this.tabContainer.nativeElement;
            if (direction === 'left') {
                container.scrollBy({
                    left: -this.scrollAmount,
                    behavior: 'smooth' // For a smooth scrolling animation
                });
            } else {
                container.scrollBy({
                    left: this.scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    }
}
