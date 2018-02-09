import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { RecipePage } from '../recipe/recipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // button to specific page
  recipeButton: any;
  menuButton: any;
 

  
  // to set segment as start up home page
  nav: string = "Discovery";

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    // button to specific page(controller)
    this.recipeButton ='RecipePage';
    this.menuButton ='Menu';
  }
  
  // loading test
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Redirecting...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }
  slides = [
    {
      title: "Welcome to Meals2Go",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "http://via.placeholder.com/350x150",
    },
    {
      title: "Get started",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "http://via.placeholder.com/350x150",
    },
    {
      title: "Learn About Pricing",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "http://via.placeholder.com/350x150",
    }
  ];

}

