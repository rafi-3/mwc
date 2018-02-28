import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { IngredientItem } from '../../models/ingredient-item/ingredient-item.interface';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {

  nav: string = "Detail";

 items: Observable<any []>;

  constructor(public navCtrl: NavController, public navParams: NavParams , afDB: AngularFireDatabase ) {
    this.items=afDB.list('ingredient').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
  }

}
