import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, Platform } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  resposeData : any;
  userData = {"email":"", "password":""};

  constructor(public navCtrl: NavController, public platform: Platform,public authService: AuthServiceProvider, private toastCtrl:ToastController, public storage:Storage) {

  }

  ionViewWillEnter() {
  this.storage.get('userData').then((val) => {
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

  login(){
   if(this.userData.email && this.userData.password){
    this.authService.postData(this.userData, "login").then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
    if(this.resposeData.userData){
    this.storage.set('userData', this.resposeData.userData);
    this.navCtrl.setRoot(HomePage);
  }
  else{
    this.presentToast("Please give valid email and password");
    console.log("Please give valid email and password");
  }
    


    }, (err) => {
      //Connection failed message
    });
   }
   else{
    this.presentToast("Give email and password");
   }
  
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  gotoSignup(){
  	this.navCtrl.push(RegisterPage);
  }

}