import { Component } from '@angular/core';
import { NavController, LoadingController,ToastController } from 'ionic-angular';

// welcome screen
import { AngularFireAuth } from 'angularfire2/auth';

import { RecipePage } from '../recipe/recipe';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any = {
    email: "test@pb.edu.bn"
  };
  // button to specific page
  recipeButton: any;
  loginButton: any;
  
  // to set segment as start up home page
  nav: string = "Discovery";

  // hujung hujung ne yg aFauth ah
  constructor(private aFauth: AngularFireAuth, private toast: ToastController, 
    public navCtrl: NavController, public loadingCtrl: LoadingController) {
    // button to specific page(controller)
    this.recipeButton ='RecipePage';
    this.loginButton = 'LoginPage';
  }
  
  ionViewWillLoad() {
    this.aFauth.authState.subscribe(data => console.log(data))
    // if(data && data.email && data.uid){
  if (true){ 
    this.toast.create({
        message: 'Welcome Back, ' + this.data.email,
        duration: 3000
      }).present();
  } else {
    // this.toast.create({
    //   message: 'Please Register',
    //   duration: 3000
    // }).present();
  }
}

  // loading test
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Redirecting...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

  // this is for discovery banner
  slides = [
    {
      title: "Welcome to Meals2Go",
      description: "Fresh Ingredients. Original Recipes. Delivered To You.",
      image: "https://i.imgur.com/54jMjox.png",
    },
    {
      title: "Get started",
      description: "Order our top-rated recipes today!",
      image: "https://i.imgur.com/afw9gJQ.png",
    },
    {
      title: "Choose your plan",
      description: "No commitment. Skip or cancel anytime.",
      image: "https://i.imgur.com/e6r5cqd.png",
    }
  ];

}

