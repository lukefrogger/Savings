import { StorageService, Day } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { subDays } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  transactions: Day[];
  totalAmount: number = 0;
  hasSavings: boolean;

  constructor(public router: Router, public storage: StorageService) {
    
  }

  ngOnInit(): void {
    this.getTotalAmount();
  }

  async getTotalAmount(){
    this.totalAmount = 0;
    this.transactions = await this.storage.getItems();

    if(this.transactions == null || this.transactions.length == 0){
      this.hasSavings = false;
      return
    }
    
    this.hasSavings = true;
    for(let day of this.transactions){
      this.totalAmount += day.total;
    }
  }

  addSavings(){
    this.router.navigate(['./enter-savings']);
  }

}
