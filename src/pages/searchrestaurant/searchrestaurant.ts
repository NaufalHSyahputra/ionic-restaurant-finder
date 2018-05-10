import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { Coordinates, Geolocation } from '@ionic-native/geolocation';
import { RestaurantServiceProvider } from '../../providers/restaurant-service/restaurant-service';
import { Storage } from '@ionic/storage';
import { DetailrestaurantPage } from '../detailrestaurant/detailrestaurant';
/**
 * Generated class for the SearchrestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchrestaurant',
  templateUrl: 'searchrestaurant.html',
})
export class SearchrestaurantPage {

	searchData = {"q":""};
	location: Coordinates;
	restaurants: any;
  lat: any;
  long: any;
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation : Geolocation,private RestaurantServiceProvider : RestaurantServiceProvider,private platform: Platform, private Loading: LoadingController, public storage:Storage) {
      this.loading = Loading.create({content: "Mencari Data..."});
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
    this.storage.get('latitude').then((val) => {
      if(val)
      {
        this.lat = val;
        console.log("exists");
      }
      else
      {
        console.log("not exist");
      }
  });
    this.storage.get('longitude').then((valx) => {
      if(valx)
      {
        this.long = valx;
        console.log("exists");
      }
      else
      {
        console.log("not exist");
      }
  });
  });
  }
  goSearch(){
    this.loading.present();
  	let data = {"q":this.searchData.q, "lat":this.lat, "long":this.long}
        this.RestaurantServiceProvider.getPosts("search", data).subscribe(
      res => this.restaurants = res.restaurants,
      err => console.warn(err),
      () => {

        this.loading.dismiss();

      }
    )
  }
    someFunction(data){
    this.navCtrl.push(DetailrestaurantPage, {data: data.restaurant})
}

}
