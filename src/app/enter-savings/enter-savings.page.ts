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
  input: any;

  constructor(
    private storage: StorageService,
    private router: Router,
    private toastController: ToastController,
    private data: HeldDataService) { }

  ngOnInit() {
    this.input = document.getElementById('mobileInput');
    this.input.value = '$0.00';
   }

  async createSavings() {
    if(this.input.value == '$0.00') {
      this.presentToast('You cannot add a $0 amount.');
      return;
    }
    const numberEntry = Number(this.parseEntry(this.input.value));
    const updatedDays = await this.storage.addItem(numberEntry);
    this.data.update(updatedDays);
    this.presentToast("You've saved money!");
    this.parseEntry('0');
    this.goBack();
  }

  updateEntry(newNum) {
    const value = this.parseEntry(newNum);
    this.formatEntry(value);
  }

  formatEntry(num) {

    // Remove the '.'
    let splitStr = num.split('.');

    // Create a new array without the zero
    let splitPre = splitStr[0].split('');
    let splitPost = splitStr[1].split('');
    const strList = [...splitPre, ...splitPost];
 
    // Remove or add the zero based on total array length 
    if(strList.length < 3) {
      strList.splice(0, 0, "0");
    } else {
      if(strList[0] == "0" && strList.length > 3){
        strList.splice(0, 1);
      }
    }
 
    // Set the decimal place based on array length
    strList.splice(strList.length - 2, 0, '.');
 
    console.log(strList.join(''));
    this.input.value = `$${strList.join('')}`;
  }

  parseEntry(num: string): string {
    const rtnValue = num.replace(/[^\d.-]/g, '');
     /* For deletions or resetting */
     if(rtnValue === '0.0' || rtnValue.length < 3){
      return '0.00';
    }

    return rtnValue;
  }

  goBack() {
    this.router.navigate(['./savings']);
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
