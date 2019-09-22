import { GoogleService } from './../services/google.service';
import { Feedback } from './../models/Feedback';
import { Router } from '@angular/router';
import { HeldDataService } from './../services/held-data.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  feedbackForm: Feedback = {name: '', email: '', rating: 0, improvement: '', created: new Date().toDateString()};
  loading: any;

  constructor(
    public data: HeldDataService,
    public router: Router,
    public api: GoogleService,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.setupLoading();
  }

  cancel() {
    this.router.navigate(['./savings']);
  }

  async setupLoading() {
    this.loading = await this.loadingController.create({
      message: 'Saving your feedback'
    });
  }

  submitForm() {
    // console.log(this.feedbackForm);
    this.loading.present();
    this.api.postToSheet(this.feedbackForm).subscribe(
      (data) => {
        if(data.result != 'success'){
          console.log('set error');
        }
        this.loading.dismiss();
        this.presentToast();

      }, (fail) => console.log(fail)
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your feedback has been added!',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }

  goBack() {
    this.router.navigate(['./savings']);
  }
}
