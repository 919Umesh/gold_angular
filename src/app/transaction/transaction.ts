import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/api/transaction';
import { TransactionModel } from '../models/transaction';
import { API_CONSTANTS } from  '../constants/api';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction.html',
  styleUrl: './transaction.css',
})
export class Transaction implements OnInit {

  transactions : TransactionModel[]=[];
  loading : boolean = true;
  error : string = '';

  constructor(private transactionService: TransactionService){}

   ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    const token = API_CONSTANTS.TOKEN;
    
    this.transactionService.getTransactions(token).subscribe({
      next: (response) => {
        this.transactions = response.data;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load transactions';
        this.loading = false;
        console.error('Error fetching transactions:', error);
      }
    });
  }

  getTransactionTypeDisplay(type: string): string {
    const typeMap: { [key: string]: string } = {
      'topup': 'Top Up',
      'buy': 'Buy Gold',
      'sell': 'Sell Gold'
    };
    return typeMap[type] || type;
  }

  formatAmount(transaction: TransactionModel): string {
    if (transaction.type === 'topup') {
      return `+$${transaction.amount}`;
    } else if (transaction.type === 'buy') {
      return `-$${transaction.amount}`;
    } else {
      return `+$${transaction.amount}`;
    }
  }
}
