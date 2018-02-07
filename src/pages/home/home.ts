import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { RecipePage } from '../recipe/recipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fancyButton: any;
  
  // to set segment as start up home page
  nav: string = "Discovery";

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    this.fancyButton ='RecipePage';
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

