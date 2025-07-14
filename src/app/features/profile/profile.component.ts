import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from "../../shared/sidenav.component";

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [CommonModule, SidenavComponent],
})
export class ProfileComponent {

}
