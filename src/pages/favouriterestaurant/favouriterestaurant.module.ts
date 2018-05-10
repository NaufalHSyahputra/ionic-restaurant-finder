import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavouriterestaurantPage } from './favouriterestaurant';

@NgModule({
  declarations: [
    FavouriterestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(FavouriterestaurantPage),
  ],
})
export class FavouriterestaurantPageModule {}
