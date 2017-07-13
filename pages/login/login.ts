import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'login-home',
  templateUrl: 'login.html',
  providers: [GooglePlus]
})
export class LoginPage {
  constructor(public navCtrl: NavController, public googlePlus: GooglePlus) { }

  displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;

  isLoggedIn: boolean = false;

  login() {

    this.googlePlus.login({
      'webClientId': '546526116840-58muqdtivtk9db9f37sinoiemo5ipvtq.apps.googleusercontent.com'
    }).then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });

  }

  logout() {

    this.googlePlus.logout().then(() => {
      console.log("logged out");
    });

  }

}