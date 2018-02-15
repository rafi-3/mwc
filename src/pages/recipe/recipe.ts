import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { IngredientItem } from '../../models/ingredient-item/ingredient-item.interface';

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {

  IngredientItem = {} as IngredientItem;

  nav: string = "Detail";
//12-1.03mins 
  ingredientListRef$: AngularFireList<IngredientItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams , private database: AngularFireDatabase ) {
    this.ingredientListRef$ = this.database.list('ingredient-list');

    // this.ingredientListRef$.subscribe(x => console.log(x))
  }

// creating new item
  addIngredientItem(ingredientItem : IngredientItem) {
    console.log(ingredientItem);

    // this.ingredientListRef$.push({
    //   ingredientName: this.IngredientItem.ingredientName,
    //   ingredientNumber: Number(this.IngredientItem.ingredientNumber)
    // });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
  }

}
