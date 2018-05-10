import { Component } from '@angular/core';
import { NavController,Platform,NavParams,LoadingController, AlertController  } from 'ionic-angular';
import { RestaurantServiceProvider } from '../../providers/restaurant-service/restaurant-service';
import { Storage } from '@ionic/storage';
import { FavouriteServiceProvider } from '../../providers/favourite-service/favourite-service';
import { Http } from '@angular/http';
import { DetailrestaurantPage } from '../detailrestaurant/detailrestaurant';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
lat: any;
long: any;
nearbyress: any;
cid: any;
loading: any;
mylocation : any;
userData: any;
bookmarkData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private RestaurantServiceProvider : RestaurantServiceProvider,private platform: Platform, public storage:Storage, public Loading: LoadingController,public alertCtrl: AlertController,public FavouriteServiceProvider: FavouriteServiceProvider, public http: Http) {
    this.cid = navParams.get('cid');
    console.log(this.cid);
  }
 ionViewWillEnter(){
this.platform.ready().then(() => {
    this.storage.get('userData').then((valx) => {
      if(valx)
      {
        this.userData = valx;
        console.log(this.userData.id);
      }
      else
      {
        console.log("not exist");
      }
  });
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
    this.getNearbyRestaurant();
    if(this.cid){
    this.getNearbyRestaurantWithCuisine();
    }
        console.log("exists");
      }
      else
      {
          
        console.log("not exist");
      }
  });
    this.storage.get('bookmark').then((list) => {
        console.log(list);
    })
  });
  }
getNearbyRestaurant() {
  this.showLoading("Ambil data dari Server...");
        let data = {"lat":this.lat, "long":this.long};
        this.RestaurantServiceProvider.getPosts("nearby", data).subscribe((datax)=>{
              this.nearbyress = datax.nearby_restaurants;
              this.mylocation = datax.location.title;
        });
                      this.dismissLoading();
  }
getNearbyRestaurantWithCuisine() {
  this.showLoading("Ambil data dari Server...");
        let data = {"lat":this.lat, "long":this.long, "cuisines":this.cid};
        this.RestaurantServiceProvider.getPosts("show", data).subscribe((datax)=>{
              this.nearbyress = datax.restaurants; 
        });
              this.dismissLoading();
  }
  someFunction(data){
    this.navCtrl.push(DetailrestaurantPage, {data: data.restaurant})
}
    showAlert(title) {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: title,
      buttons: ['OK']
    });
    alert.present();
  }

    showLoading(message) {
        this.loading = this.Loading.create({content: message, dismissOnPageChange: false});
        this.loading.present();
        return this.loading;
    }

    dismissLoading() {
        if (this.loading) {
            try {
                this.loading.dismiss();
            }
            catch (exception) {
              console.log(exception);
            }
            this.loading = null;
        }
    }
}