import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { RecipePage } from '../recipe/recipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fancyButton: any;
  nav: string = "Discovery";

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    this.fancyButton ='../recipe/recipe';
  }
  
  // loading 
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Redirecting...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

}

