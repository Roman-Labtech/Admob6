import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobPro } from '@ionic-native/admob-pro';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NgModel } from '@angular/forms';
import { HomePage } from '../home/home';

@Component({
    selector: 'first-home',
    templateUrl: 'first.html'
})
export class FirstPage {
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

		

	//ygol_i_2_storony

	ygol_i_2_storony1() {
		 let alert = this.alertCtrl.create({
      title: 'Ошибка!',
      subTitle: 'Введите верное числовое значение. Треугольник с такими сторонами не существует',
      buttons: ['OK']
    });
    alert.present();
	};


			
		//////////////
	link3stor(){
	this.navCtrl.push('FirstPage');
	}
	
	
	//////////////
	
	osn_i_vysota(){
	var s;	
	var a=Number(this.inp1);	
	var h=Number(this.inp2);
	var numchislo=3;
//Проверка положительность введенных чисел
if (isFinite(a) &&(a>0)){	
if (isFinite(h) &&(h>0)){

    s=(a)*0.5*h;
    if(numchislo=3){
        s=s.toFixed(numchislo); 
    }
    
	let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Площадь равна S=' + s,
      buttons: ['OK']
    });
    alert.present();
 
}
		else		
{
	  let alert = this.alertCtrl.create({
      title: 'Ошибка!',
      subTitle: 'Введите верное числовое значение. Треугольник с такими сторонами не существует',
      buttons: ['OK']
    });
    alert.present();
}
} 		
	else		
{
	  let alert = this.alertCtrl.create({
      title: 'Ошибка!',
      subTitle: 'Введите верное числовое значение. Треугольник с такими сторонами не существует',
      buttons: ['OK']
    });
    alert.present();
};};
	
	firstgo(){
		this.navCtrl.push(FirstPage);
	}
	
homego(){
		this.navCtrl.push(HomePage);
}



}