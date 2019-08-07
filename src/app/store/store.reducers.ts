import { IDay } from './../services/storage.service';
import { createReducer, on } from '@ngrx/store';
import { addTransaction, getTransactions } from './store.actions';

export const initialDaysState: IDay[] = null;