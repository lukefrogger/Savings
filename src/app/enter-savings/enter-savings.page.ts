import { MobileInputPipe } from './../pipes/mobile-input.pipe';
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
    public storage: StorageService,
    public router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
    this.input = document.getElementById('mobileInput');
    this.input.value = '$0.00';
   }

  async createSavings() {
    // console.log(this.savings);
    // const updatedDays = await this.storage.addItem(this.savings);
    // this.data.update(updatedDays);
    // this.presentToast();
    // this.savings = undefined;
  }

  updateEntry(newNum) {
    const value = this.validateEntry(newNum);

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

  validateEntry(num) {
    let rtnValue = num.replace('$', '');
    rtnValue = rtnValue.replace(/[^\d.-]/g, '')

     /* Not catching any removals */
     if(rtnValue === '0.0' || rtnValue.length < 3){
      rtnValue = '0.00';
    }

    return rtnValue;
  }

  goBack() {
    this.router.navigate(['./savings']);
  }

}
