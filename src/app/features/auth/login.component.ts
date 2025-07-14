import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  loginError = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { username, password } = this.loginForm.value;
    if (this.auth.login(username!, password!)) {
      this.router.navigate(['/dashbaords']);
    } else {
      this.loginError = true;
    }
  }

  closeLogin(): void {
    // Navigate back to the home page or a previous page
    this.router.navigate(['/']); // Assuming '/' is your home route
  }
}
