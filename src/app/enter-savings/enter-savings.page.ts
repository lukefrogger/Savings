import { HeldDataService } from './../services/held-data.service';
import { Router } from '@angular/router';
import { StorageService } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-enter-savings',
  templateUrl: './enter-savings.page.html',
  styleUrls: ['./enter-savings.page.scss'],
})
export class EnterSavingsPage implements OnInit {
  savings = '0.00';

  constructor(
    public storage: StorageService,
    public router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
   }

  async createSavings() {
    // console.log(this.savings);
    // const updatedDays = await this.storage.addItem(this.savings);
    // this.data.update(updatedDays);
    // this.presentToast();
    // this.savings = undefined;
  }

  updateEntry(newNum) {

    /* Not catching any removals */
    if(newNum === '0.0' || newNum.length < 3){
      this.savings = '0.00';
      return;
    }

    // Remove the '.'
    let splitStr = newNum.split('.');

    // Create a new array without the zero
    let splitPre = splitStr[0].split('');
    let splitPost = splitStr[1].split('');
    const strList = [...splitPre, ...splitPost];

    // Remove or add the zero based on total array length 
    if(strList.length < 3) {
      strList.splice(0, 0, "0");
    } else {
      if(strList[0] == "0" && strList.length >= 3){
        strList.splice(0, 1);
      }
    }

    // Set the decimal place based on array length
    strList.splice(strList.length - 2, 0, '.');

    this.savings = strList.join('');
  }

  goBack() {
    this.router.navigate(['./savings']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your savings has been added!',
      color: 'success',
      duration: 4000
    });
    toast.present();
  }

}
