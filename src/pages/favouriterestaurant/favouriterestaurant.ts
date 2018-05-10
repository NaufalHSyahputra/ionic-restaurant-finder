import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavouriteServiceProvider } from '../../providers/favourite-service/favourite-service';
import { RestaurantServiceProvider } from '../../providers/restaurant-service/restaurant-service';
import { DetailrestaurantPage } from '../detailrestaurant/detailrestaurant';
/**
 * Generated class for the FavouriterestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favouriterestaurant',
  templateUrl: 'favouriterestaurant.html',
})
export class FavouriterestaurantPage {

  data: any;
  restaurants: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public FavouriteServiceProvider: FavouriteServiceProvider,private RestaurantServiceProvider : RestaurantServiceProvider) {
  }

  ionViewWillEnter() {
    this.FavouriteServiceProvider.getAllFavoriteRestaurant().then(result => { 
	if(result != null){
    	this.data = result;
    	for(let i=0;i<result.length;i++){
    		let data = {"res_id":result[i]};
    		this.RestaurantServiceProvider.getPosts("restaurant", data).subscribe((datax)=>{
    			this.restaurants.push(datax);
    		});
    	}
	}
    });
  }
  someFunction(hasil){
    this.navCtrl.push(DetailrestaurantPage, {data: hasil})
}

}
