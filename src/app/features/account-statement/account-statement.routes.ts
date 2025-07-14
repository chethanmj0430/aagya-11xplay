import { Routes } from '@angular/router';
import { AccountStatementComponent } from './account-statement.component';
import { authGuard } from '../../core/auth.guard';

export const ACCOUNT_STATEMENT_ROUTES: Routes = [
  { path: '', component: AccountStatementComponent, canActivate: [authGuard] }
];
