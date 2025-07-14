import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { authGuard } from '../../core/auth.guard';

export const PROFILE_ROUTES: Routes = [
   { path: '', component: ProfileComponent, canActivate: [authGuard] }
];
