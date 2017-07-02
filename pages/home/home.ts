import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dinosaurs: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,  private afDB: AngularFireDatabase) {
    this.dinosaurs = afDB.list('/', {
      query: {
        orderByChild: 'height'
      }
    })
  }

  ionViewDidLoad() {
    console.log(this.dinosaurs);
  }

}
