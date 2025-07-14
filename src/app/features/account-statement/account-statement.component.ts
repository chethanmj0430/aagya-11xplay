import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../../shared/sidenav.component';

@Component({
  standalone: true,
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrl: './account-statement.component.scss',
  imports: [CommonModule, SidenavComponent]
})
export class AccountStatementComponent {
  transactions = [
    { date: new Date(), description: 'Deposit', amount: 5000, type: 'Credit' },
    { date: new Date(), description: 'Bet Placed', amount: -1500, type: 'Debit' },
    { date: new Date(), description: 'Withdrawal', amount: -2000, type: 'Debit' }
  ];
}
