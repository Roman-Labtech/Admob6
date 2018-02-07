import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AdMobPro } from '@ionic-native/admob-pro';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FirstPage } from '../pages/first/first';
import { SecondPage } from '../pages/second/second';
import { ThirdPage } from '../pages/third/third';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	FirstPage,
	SecondPage,
	ThirdPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
	FirstPage,
	SecondPage,
	ThirdPage,
  ],
  providers: [
    StatusBar,
	AdMobPro,
    SplashScreen,
	NgModel,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
