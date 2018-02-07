import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobPro } from '@ionic-native/admob-pro';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NgModel } from '@angular/forms';
import { HomePage } from '../home/home';

@Component({
    selector: 'third-home',
    templateUrl: 'third.html'
})
export class ThirdPage {
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
	public inp4;
	

	
	


		
	
	//ygol_i_2_storony
	
	ygol_i_2_storony() {	
	var a=Number(this.inp1);
	var b=Number(this.inp2);	
	var c=Number(this.inp4);
	var s;
   ////////////////////////////////
		var xx;
//Проверка на числа
if (isFinite(a) &&(a>0)){
if (isFinite(b) &&(b>0)){
if (isFinite(c) &&(c>0 && c<180)){
	  //Проверка на существование треугольника          

	s=Math.sin(c / 180 * Math.PI);	
	s=(0.5)*(s*a*b);	
	let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Площадь равна S=' + s,
      buttons: ['OK']
    });
    alert.present();
			}
			
	
    else{
		    let alert = this.alertCtrl.create({
      title: 'Ошибка!',
      subTitle: 'Введите верное числовое значение. Угол должен быть меньше 180',
      buttons: ['OK']
    });
    alert.present();
	
	};
 }
	else
{

	let alert = this.alertCtrl.create({
      title: 'Ошибка!',
      subTitle: 'Треугольник не существует. Введите корректные значения',
      buttons: ['OK']
    });
    alert.present();
}
}
	else
{

	let alert = this.alertCtrl.create({
      title: 'Ошибка!',
      subTitle: 'Треугольник не существует. Введите корректные значения',
      buttons: ['OK']
    });
    alert.present();
}};
 
	ygol_i_2_storony1() {
		 let alert = this.alertCtrl.create({
      title: 'Ошибка!',
      subTitle: 'Введите верное числовое значение. Треугольник с таким сторонами не существует',
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
	
//Проверка положительность введенных чисел
if (isFinite(a) &&(a>0)){	
if (isFinite(h) &&(h>0)){

    s=(a)*0.5*h;
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
	

	
homego(){
		this.navCtrl.push(HomePage);
}



}