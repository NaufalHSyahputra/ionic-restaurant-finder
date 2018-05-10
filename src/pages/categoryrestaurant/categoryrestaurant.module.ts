import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryrestaurantPage } from './categoryrestaurant';

@NgModule({
  declarations: [
    CategoryrestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryrestaurantPage),
  ],
})
export class CategoryrestaurantPageModule {}
