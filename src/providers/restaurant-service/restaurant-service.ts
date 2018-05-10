import {Http ,Response,Headers, RequestOptions } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RestaurantServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantServiceProvider {

  constructor(public http : Http) {
    console.log('Hello RestaurantServiceProvider');
  }


getKategoriUrl : string = "https://developers.zomato.com/api/v2.1/cuisines"; //?lat=6.172391&lon=106.782810
getSearchUrl : string = "https://developers.zomato.com/api/v2.1/search"; //?entity_id=74&entity_type=city || ?entity_id=74&entity_type=city&q=Sushi
getDetailUrl : string = "https://developers.zomato.com/api/v2.1/restaurant"; //?res_id=18567253
getNearbyUrl : string = "https://developers.zomato.com/api/v2.1/geocode" //?lat=40.742051&lon=-74.004821
getRestaurantUrl: string = "https://developers.zomato.com/api/v2.1/restaurant" //?res_id=16774318
getApiUrl : string;

getPosts(action, data) {
	if(action == "kategori"){
		this.getApiUrl = this.getKategoriUrl+"?lat="+data.lat+"&lon="+data.long;
	}else if(action == "search"){
		this.getApiUrl = this.getSearchUrl+"?q="+data.q+"&lat="+data.lat+"&lon="+data.long+"&radius=1000";
	}else if(action == "detail"){
		this.getApiUrl = this.getDetailUrl;
	}else if(action == "nearby"){
    this.getApiUrl = this.getNearbyUrl+"?lat="+data.lat+"&lon="+data.long;
  }else if(action == "show"){
    this.getApiUrl = this.getSearchUrl+"?lat="+data.lat+"&lon="+data.long+"&radius=1000&cuisines="+data.cuisines;
  }else if(action == "restaurant"){
    this.getApiUrl = this.getRestaurantUrl+"?res_id="+data.res_id;
  }
let headers = new Headers({'Accept':'application/json','user-key':'6a45badc93a1852abc76af734740daef'});
let options = new RequestOptions({ headers: headers });
    return this.http.get(this.getApiUrl, options)
            .do((res : Response ) => console.log(res.json()))
            .map((res : Response ) => res.json());
  }
}
