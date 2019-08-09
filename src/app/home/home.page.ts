import { TransactionsState } from './../services/transactions';
import { HeldDataService } from './../services/held-data.service';
import { StorageService, IDay } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  transactions: IDay[];
  totalAmount = 0;
  hasSavings: boolean;
  private subscription$: Subscription;

  constructor(public router: Router, public storage: StorageService, public data: HeldDataService) {  }

  ngOnInit(): void {
    this.getTotalAmount();
    this.data.updatePageTitle({text: 'Savings', showBack: false});
  }

  async getTotalAmount() {
    this.totalAmount = 0;
    this.setupSub();
    const days = await this.storage.getItems();
    this.data.update(days);
  }

  setupSub() {
    this.subscription$ = this.data.transactionsState.subscribe(
      (state: TransactionsState) => {
        this.transactions = state.transactions;

        if (this.transactions == null || this.transactions.length == 0) {
          this.hasSavings = false;
        } else {
          this.hasSavings = true;
          this.totalAmount = 0;
          for (const day of this.transactions) {
            this.totalAmount += day.total;
          }
        }
      }
    );
  }

  addSavings() {
    this.data.updatePageTitle({text: 'Save Money', showBack: true});
    this.router.navigate(['./enter-savings']);
  }

}
