import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  
  resposeData : any;
  userData = {"email":"", "password":"", "nama":""};

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, private toastCtrl:ToastController, public storage:Storage) {
    storage.get('userData').then((val) => {
			if(val)
			{
				this.navCtrl.setRoot(HomePage)
				console.log("exists");
			}
			else
			{
				console.log("not exist");
			}
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad register');
  }

  signup(){
   if(this.userData.email && this.userData.password && this.userData.nama){
    this.authService.postData(this.userData, "signup").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
    if(this.resposeData.userData){
    this.presentToast("Registrasi berhasil!");
    this.navCtrl.setRoot(LoginPage);
  }
  else{
    this.presentToast("Please give valid email, password and name");
    console.log("Please give valid email, password and name");
  }
    


    }, (err) => {
      //Connection failed message
    });
   }
   else{
    this.presentToast("Give email and password and name");
   }
  
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }


}
