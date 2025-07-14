import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private validUser = { username: 'admin', password: 'admin123' };

  private _isLoggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));

  public isLoggedIn$: Observable<boolean> = this._isLoggedIn.asObservable();
  
  login(username: string, password: string): boolean {
    if (username === this.validUser.username && password === this.validUser.password) {
      localStorage.setItem('token', 'mock-jwt-token');
      this._isLoggedIn.next(true);
      return true;
    }
    this._isLoggedIn.next(false); 
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
