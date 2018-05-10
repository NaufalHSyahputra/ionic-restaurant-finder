import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { RestaurantServiceProvider } from '../../providers/restaurant-service/restaurant-service';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the CategoryrestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoryrestaurant',
  templateUrl: 'categoryrestaurant.html',
})
export class CategoryrestaurantPage {
	cuisines: any;
  lat: any;
  long: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private RestaurantServiceProvider : RestaurantServiceProvider,private platform: Platform,private storage: Storage) {

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
        this.getData();
        console.log("exists");
      }
      else
      {
        console.log("not exist");
      }
  });
  });
  }
  getData(){
  	let data = {"lat":this.lat, "long":this.long}
        this.RestaurantServiceProvider.getPosts("kategori", data).subscribe((datax)=>{
            	this.cuisines = datax.cuisines;
        });
        console.log(data);
  }
  catselected(cuisine){
    this.navCtrl.push(HomePage, {cid: cuisine.cuisine.cuisine_id})
  }
}
