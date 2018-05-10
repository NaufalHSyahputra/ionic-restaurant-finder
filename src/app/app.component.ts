import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CategoryrestaurantPage } from '../pages/categoryrestaurant/categoryrestaurant';
import { FavouriterestaurantPage } from '../pages/favouriterestaurant/favouriterestaurant';
import { SearchrestaurantPage } from '../pages/searchrestaurant/searchrestaurant';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Storage } from '@ionic/storage';
import { FavouriteServiceProvider } from '../providers/favourite-service/favourite-service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  constructor(public platform: Platform, public statusBar: StatusBar, private geolocation : Geolocation,public splashScreen: SplashScreen,public storage:Storage,private diagnostic: Diagnostic,public FavouriteServiceProvider: FavouriteServiceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Cari Restoran', component: SearchrestaurantPage },
      { title: 'List Favorit', component: FavouriterestaurantPage },
      { title: 'Kategori Restoran', component: CategoryrestaurantPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getPermission();
      this.getLocation();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

getPermission(){
      this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.ACCESS_FINE_LOCATION).then((status) => {
      console.log(`AuthorizationStatus`);
      console.log(status);
      if (status != this.diagnostic.permissionStatus.GRANTED) {
        this.diagnostic.requestRuntimePermission(this.diagnostic.permission.ACCESS_FINE_LOCATION).then((data) => {
          console.log(`getACCESS_FINE_LOCATIONStatus`);
          console.log(data);
        })
      } else {
        console.log("We have the permission");

      }
    }, (statusError) => {
      console.log(statusError);
    });
}
  async getLocation() {
    await this.platform.ready();
    const { coords } = await this.geolocation.getCurrentPosition({ timeout: 30000, enableHighAccuracy: true });
    this.storage.set("latitude", coords.latitude);
    this.storage.set("longitude", coords.longitude);
  }
}
