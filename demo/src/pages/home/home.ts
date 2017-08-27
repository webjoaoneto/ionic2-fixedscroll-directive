import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
      {
          "name": "Burt Bear",
          "profilePic": "http://lorempixel.com/100/100/people/1/",
          "about": "Burt is a Bear."
      },
      {
          "name": "Charlie Cheetah",
          "profilePic": "http://lorempixel.com/100/100/people/2/",
          "about": "Charlie is a Cheetah."
      },
      {
          "name": "Donald Duck",
          "profilePic": "http://lorempixel.com/100/100/people/3/",
          "about": "Donald is a Duck."
      },
      {
          "name": "Eva Eagle",
          "profilePic": "http://lorempixel.com/100/100/people/4/",
          "about": "Eva is an Eagle."
      },
      {
          "name": "Ellie Elephant",
          "profilePic": "http://lorempixel.com/100/100/people/5/",
          "about": "Ellie is an Elephant."
      },
      {
          "name": "Donald Duck",
          "profilePic": "http://lorempixel.com/100/100/people/11/",
          "about": "Donald is a Duck."
      },
      {
          "name": "Eva Eagle",
          "profilePic": "http://lorempixel.com/100/100/people/21/",
          "about": "Eva is an Eagle."
      },
      {
          "name": "Ellie Elephant",
          "profilePic": "http://lorempixel.com/100/100/people/13/",
          "about": "Ellie is an Elephant."
      },
      {
          "name": "Donald Duck",
          "profilePic": "http://lorempixel.com/100/100/people/14/",
          "about": "Donald is a Duck."
      },
      {
          "name": "Eva Eagle",
          "profilePic": "http://lorempixel.com/100/100/people/15/",
          "about": "Eva is an Eagle."
      },
      {
          "name": "Ellie Elephant",
          "profilePic": "http://lorempixel.com/100/100/people/111/",
          "about": "Ellie is an Elephant."
      },
      {
          "name": "Molly Mouse",
          "profilePic": "http://lorempixel.com/100/100/people/21/",
          "about": "Molly is a Mouse."
      },
      {
          "name": "Paul Puppy",
          "profilePic": "http://lorempixel.com/100/100/people/1/",
          "about": "Paul is a Puppy."
      }
  ];

  constructor(public navCtrl: NavController) {

  }

}
