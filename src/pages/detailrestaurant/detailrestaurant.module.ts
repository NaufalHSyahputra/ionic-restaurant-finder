import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailrestaurantPage } from './detailrestaurant';

@NgModule({
  declarations: [
    DetailrestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailrestaurantPage),
  ],
})
export class DetailrestaurantPageModule {}
