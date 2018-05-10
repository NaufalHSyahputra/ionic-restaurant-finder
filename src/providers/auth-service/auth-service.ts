import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://localhost/restful-api/index.php/';

@Injectable()
export class AuthServiceProvider {

  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers}).map(res => res.json())
        .subscribe(data => { console.log(data);
          resolve(data);
        }, (err) => {
          console.error(err.message);
          reject(err);
        });
    });

  }

}