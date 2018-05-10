import { Storage } from '@ionic/storage';
import {Injectable} from '@angular/core';
const STORAGE_KEY = 'favourite';
@Injectable()
export class FavouriteServiceProvider {

  constructor(public storage : Storage) {
    console.log('Hello FavouriteSerice Provider');
  }
 isFavorite(restaurantId) {
    return this.getAllFavoriteRestaurant().then(result => {
      return result && result.indexOf(restaurantId) !== -1;
    });
  }
 
  favoriteRestaurant(restaurantId) {
    return this.getAllFavoriteRestaurant().then(result => {
      if (result) {
        result.push(restaurantId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [restaurantId]);
      }
    });
  }
 
  unfavoriteRestaurant(restaurantId) {
    return this.getAllFavoriteRestaurant().then(result => {
      if (result) {
        var index = result.indexOf(restaurantId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  getAllFavoriteRestaurant() {
    return this.storage.get(STORAGE_KEY);
  }
  }