import { Router } from '@angular/router';
import { HeldDataService } from './services/held-data.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title: {text: string, showBack: boolean} = {text: '', showBack: false};

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public data: HeldDataService,
    public router: Router
  ) {
    this.initializeApp();
    this.data.pageTitle.subscribe(success => this.title = success);
  }

  giveFeedback() {
    this.router.navigate(['./feedback']);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

}
