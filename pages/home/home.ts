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
    this.dinosaurs = afDB.list('/');
  }

  ionViewDidLoad() {
    console.log(this.dinosaurs);
  }
  
  filter(dinosaur : any, value) : boolean{
     // Return true if I want that specified height
     // e.g. show only dinosaurs with a height of 4
     if (dinosaur.height == value){
       return false;
     }
     return true; 
  }

}
