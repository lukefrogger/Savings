import { Router } from '@angular/router';
import { HeldDataService } from './../services/held-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(
    public data: HeldDataService,
    public router: Router
  ) { }

  ngOnInit() {
    this.data.updatePageTitle({text: 'Feedback', showBack: false});
  }

  cancel() {
    this.router.navigate(['./savings']);
  }

  submitForm(form) {
    //call to google.service
  }
}
