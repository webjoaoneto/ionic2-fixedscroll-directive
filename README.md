# Ionic2-Calendar directive

Ionic2+ Fixed Scroll Directive for any component.

# Dependency
Needs Ionic 2 or Ionic 3 on the more recent versions.      


# Usage

Install: `npm install ionic2-fixedscroll-directive --save`

Import the ionic2-fixedscroll-directive module:

```
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app/app.component';
import { NgFixedScrollModule  } from 'ionic2-fixedscroll-directive';

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        NgFixedScrollModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ]
})
export class AppModule {}
```

If you are using PageModule, you need to import the NgFixedScrollModule in your page module
```
import { NgFixedScrollModule  } from 'ionic2-fixedscroll-directive';

@NgModule({
  declarations: [
    MyPage
  ],
  imports: [
    IonicPageModule.forChild(MyPage),
    NgFixedScrollModule
  ],
  entryComponents: [
    MyPage
  ]
})
export class MyPageModule {}
```

Add the directive in any custom component

```
      <YourComponent fixed-scroll></YourComponent>
```
or with ionic native components

```
      <ion-searchbar fixed-scroll></ion-searchbar>
```


# CSS and styles

This component adds a "fixed" class to the component in the moment that scrolls on page are on the component.
You need to setup your SASS file to add this styles.

Example (Using a searchbar component):

* In custom components, is a good practice create an separeted css class for ios|md|wp because the toolbar sizes are different

```
   your-page {
       ion-searchbar {
           &.fixed {
            @extend .toolbar;
            position: fixed;
            top: 0; 

            transition: all 0.5s ease;

            &.searchbar-ios {
                transform: translateY(#{$navbar-ios-height} + #{$cordova-ios-statusbar-padding});
            }

            &.searchbar-md {
                transform: translateY(#{$navbar-md-height});
            }
            
            &.searchbar-wp {
                transform: translateY(#{$navbar-md-height});
            }
            z-index: 3; //zindex to put it on top of some ionic components
        }
       }
   }
```
