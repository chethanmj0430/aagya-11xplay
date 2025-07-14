import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private validUser = { username: 'admin', password: '1234' };

  private _isLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  // 2. Expose an Observable that components can subscribe to.
  // Using .asObservable() prevents external components from directly modifying the state.
  public isLoggedIn$: Observable<boolean> = this._isLoggedIn.asObservable();
  
  login(username: string, password: string): boolean {
    if (username === this.validUser.username && password === this.validUser.password) {
      localStorage.setItem('token', 'mock-jwt-token');
      this._isLoggedIn.next(true); // Update the BehaviorSubject to true on successful login
      return true;
    }
    this._isLoggedIn.next(false); // Update the BehaviorSubject to false on failed login
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this._isLoggedIn.next(false);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
