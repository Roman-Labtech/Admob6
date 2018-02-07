import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobPro } from '@ionic-native/admob-pro';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NgModel } from '@angular/forms';
import { FirstPage } from '../first/first';
import { SecondPage } from '../second/second';
import { ThirdPage } from '../third/third';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController, platform: Platform, private admob: AdMobPro, public alertCtrl: AlertController) {
        platform.ready().then(() => {
            var admobid = {
                banner: 'ca-app-pub-3940256099942544/6300978111',
                interstitial: 'ca-app-pub-3940256099942544/1033173712'
            };

            this.admob.createBanner({
                adId: admobid.banner,
                isTesting: true,
                autoShow: true,
                position: this.admob.AD_POSITION.BOTTOM_CENTER
            })

            this.admob.prepareInterstitial({
                adId: admobid.interstitial,
                isTesting: true,
                autoShow: false
            })
        });
    }

    showInterstitialAd() {
        if (AdMobPro) {
            this.admob.showInterstitial();
        }
    }
	
	public inp1;
	public inp2;
	public inp3;
	

	
	
	showAlert() {

	var x1=this.inp1;
	var x2=this.inp2;
	var x3=this.inp3;
		var a=x1;
		var b=x2;
		var c=x3;
	}

		

	
	firstgo(){
		this.navCtrl.push(FirstPage);
	}
	secondgo(){
		this.navCtrl.push(SecondPage);
	}
	thirdgo(){
		this.navCtrl.push(ThirdPage);
	}
} 








