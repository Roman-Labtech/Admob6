import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobPro } from '@ionic-native/admob-pro';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NgModel } from '@angular/forms';
import { HomePage } from '../home/home';

@Component({
    selector: 'second-home',
    templateUrl: 'second.html'
})
export class SecondPage {
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
	

	
	
		
	tri_storony() {	
	var x1=Number(this.inp1);
	var x2=Number(this.inp2);	
	var x3=Number(this.inp3);
	var s;
   ////////////////////////////////
		
		var xx;
		var a=x1;
var b=x2;
var c=x3;
//Проверка на числа
if (isFinite(a) &&(a>0)){
if (isFinite(b) &&(b>0)){
if (isFinite(c) &&(c>0)){
	  //Проверка на существование треугольника          
    if(a<b+c){
		if(b<a+c){
			if(c<a+b){
				xx=(a+b+c)/2;			  
						xx=xx*(xx-a)*(xx-b)*(xx-c)						
						xx=Math.sqrt(xx);
						s=xx;
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
      subTitle: 'Треугольник с такими сторонами не существует. Введите корректные значения',
      buttons: ['OK']
    });
    alert.present();
}
		}
			else
{

	let alert = this.alertCtrl.create({
      title: 'Ошибка!',
      subTitle: 'Треугольник с такими сторонами не существует. Введите корректные значения',
      buttons: ['OK']
    });
    alert.present();
}
	}
    else{
		    let alert = this.alertCtrl.create({
      title: 'Ошибка!',
      subTitle: 'Треугольник с такими сторонами не существует. Введите корректные значения',
      buttons: ['OK']
    });
    alert.present();
	
	};
 }}
	else
{

	let alert = this.alertCtrl.create({
      title: 'Ошибка!',
      subTitle: 'Треугольник с такими сторонами не существует. Введите корректные значения',
      buttons: ['OK']
    });
    alert.present();
}
}
	else
{

	let alert = this.alertCtrl.create({
      title: 'Ошибка!',
      subTitle: 'Треугольник с такими сторонами не существует. Введите корректные значения',
      buttons: ['OK']
    });
    alert.present();
};
		
		//////////////
		

  }
	
	tri_storony_clear(){
		this.inp1="222255";
		this.inp2="222255";
		this.inp3="222255";
	}
	
	//ygol_i_2_storony
	

			
		
	
homego(){
 this.navCtrl.push(HomePage);
}



}