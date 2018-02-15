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

