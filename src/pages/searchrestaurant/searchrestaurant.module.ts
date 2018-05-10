import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchrestaurantPage } from './searchrestaurant';

@NgModule({
  declarations: [
    SearchrestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchrestaurantPage),
  ],
})
export class SearchrestaurantPageModule {}
