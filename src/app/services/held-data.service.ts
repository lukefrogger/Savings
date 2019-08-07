import { TransactionsState } from './transactions';
import { IDay } from './storage.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeldDataService {
  totalSaved: number;

  private transactionsSubject = new Subject<TransactionsState>();
  transactionsState = this.transactionsSubject.asObservable();

  constructor() { }

  update(updatedDays){
    this.transactionsSubject.next({ transactions: updatedDays } as TransactionsState);
  }
}
