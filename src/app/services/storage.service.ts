import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { isSameDay, format } from 'date-fns';

const items_key = 'transactions';

export interface ISavings {
  amount: number;
}

export interface IDay {
  total: number;
  date: string;
  savings: [ISavings];
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  // CREATE
  addItem(newSavings: number): Promise<any> {
    /* Used to delete info */
    // return this.storage.set(items_key, []);
    let today = format(new Date(), 'MM/DD/YYYY');

    return this.storage.get(items_key).then((items: IDay[]) => {
      if (items) {
        let existingDayIndex = items.findIndex((day) => day.date === today);
        this.updateItems(existingDayIndex, items, newSavings);
        return this.storage.set(items_key, items);
      } else {
        return this.storage.set(
          items_key,
          {date: format(new Date(), 'MM/DD/YYYY'), total: newSavings, savings: [{amount: newSavings}]}
        );
      }
    }).catch((fail) => console.log(fail));
  }

  private updateItems(index, items: IDay[], newSavings: number): IDay[] {
    if(index >= 0){
      items[index].savings.push({amount: newSavings});
    } else if(index === -1) {
      items.push({date: format(new Date(), 'MM/DD/YYYY'), total: newSavings, savings: [{amount: newSavings}]});
    } else {
      console.log('No match for index  :(');
    }

    return items;
  }

  getItems(): Promise<IDay[]> {
    return this.storage.get(items_key);
  }

}
