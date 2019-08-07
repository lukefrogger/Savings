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
    public toastController: ToastController) { }

  ngOnInit() {  }

  async createSavings() {
    console.log(this.savings);
    let updatedSavings = await this.storage.addItem(this.savings);
    this.presentToast();
    this.savings = undefined;
  }

  goBack(){
    this.router.navigate(['./savings']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your savings has been saved!',
      color: 'success',
      duration: 4000
    });
    toast.present();
  }

}
