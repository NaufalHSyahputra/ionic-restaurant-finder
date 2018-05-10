import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CategoryrestaurantPage } from '../pages/categoryrestaurant/categoryrestaurant';
import { FavouriterestaurantPage } from '../pages/favouriterestaurant/favouriterestaurant';
import { SearchrestaurantPage } from '../pages/searchrestaurant/searchrestaurant';
import { ResultCategoryPage } from '../pages/result-category/result-category';
import { DetailrestaurantPage } from '../pages/detailrestaurant/detailrestaurant';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { RestaurantServiceProvider } from '../providers/restaurant-service/restaurant-service';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { FavouriteServiceProvider } from '../providers/favourite-service/favourite-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    CategoryrestaurantPage,
    FavouriterestaurantPage,
    SearchrestaurantPage,
    ResultCategoryPage,
    DetailrestaurantPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    CategoryrestaurantPage,
    FavouriterestaurantPage,
    SearchrestaurantPage,
    ResultCategoryPage,
    DetailrestaurantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantServiceProvider,
    Diagnostic,
    AuthServiceProvider,
    Geolocation,
    FavouriteServiceProvider
  ]
})
export class AppModule {}
