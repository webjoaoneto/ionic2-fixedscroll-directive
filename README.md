# Ionic2-FixedScroll-Directive
![|Dependency check](https://david-dm.org/joao-gsneto/ionic2-fixedscroll-directive.svg) 
![|DevDependency check](https://david-dm.org/joao-gsneto/ionic2-fixedscroll-directive/dev-status.svg)
[![npm version](https://badge.fury.io/js/ionic2-fixedscroll-directive.svg)](https://badge.fury.io/js/ionic2-fixedscroll-directive) 

Ionic2+ Fixed Scroll Directive for any component.

# Dependency
Needs Ionic 3 on the most recent versions.      

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


# CSS and styles (Important)

This component adds a "fixed" class to the component in the moment that scrolls on page are on the component.
BUT you need to setup your SASS file to add the fixed styles to your app.

Most common style is defining a top: 0; and position: fixed; css attributes.

Example (Using a searchbar component):

* In custom components, is a good practice create an separeted css class for ios|md|wp because the toolbar sizes are different

```
   your-page {
       ion-searchbar {
           &.fixed {
            @extend .toolbar; //optional
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
