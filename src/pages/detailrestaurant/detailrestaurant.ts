import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FavouriteServiceProvider } from '../../providers/favourite-service/favourite-service';
/**
 * Generated class for the DetailrestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailrestaurant',
  templateUrl: 'detailrestaurant.html',
})
export class DetailrestaurantPage {
	data: any;
  isFavorite = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public platform: Platform, public FavouriteServiceProvider: FavouriteServiceProvider) {
    this.data = navParams.get('data');
    this.FavouriteServiceProvider.isFavorite(this.data.id).then(isFav => {
      this.isFavorite = isFav;
    })
  }

  ionViewWillEnter() {
this.platform.ready().then(() => {
this.storage.get('favourite').then((list) => {
      console.log(list);
    });
  });
  }
 favoriteRestaurant() {
    this.FavouriteServiceProvider.favoriteRestaurant(this.data.id).then(() => {
      this.isFavorite = true;
    });
  }
 
  unfavoriteRestaurant() {
    this.FavouriteServiceProvider.unfavoriteRestaurant(this.data.id).then(() => {
      this.isFavorite = false;
    });
  }

}
