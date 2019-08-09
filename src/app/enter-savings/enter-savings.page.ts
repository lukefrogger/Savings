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
  savings: number;

  constructor(
    public storage: StorageService,
    public router: Router,
    public toastController: ToastController,
    public data: HeldDataService) { }

  ngOnInit() {
    this.data.updatePageTitle({text: 'Save Money', showBack: true});
   }

  async createSavings() {
    console.log(this.savings);
    const updatedDays = await this.storage.addItem(this.savings);
    this.data.update(updatedDays);
    this.presentToast();
    this.savings = undefined;
  }

  goBack() {
    this.data.updatePageTitle({text: 'My Savings', showBack: false});
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
