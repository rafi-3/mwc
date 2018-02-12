import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor( private aFauth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

 async login(user: User) {
   try {
    const result = this.aFauth.auth.signInWithEmailAndPassword(user.email , user.password);
    // console.log(result);
    if(result) {
    this.navCtrl.setRoot('HomePage');
    }
  } 
  catch(e) {
      console.error(e);
  }
} 

  register() {
    this.navCtrl.push('RegisterPage')
  }
}
