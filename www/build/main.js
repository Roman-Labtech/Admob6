webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FirstPage = (function () {
    function FirstPage(navCtrl, platform, admob, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.admob = admob;
        this.alertCtrl = alertCtrl;
        platform.ready().then(function () {
            var admobid = {
                banner: 'ca-app-pub-3940256099942544/6300978111',
                interstitial: 'ca-app-pub-3940256099942544/1033173712'
            };
            _this.admob.createBanner({
                adId: admobid.banner,
                isTesting: true,
                autoShow: true,
                position: _this.admob.AD_POSITION.BOTTOM_CENTER
            });
            _this.admob.prepareInterstitial({
                adId: admobid.interstitial,
                isTesting: true,
                autoShow: false
            });
        });
    }
    FirstPage_1 = FirstPage;
    FirstPage.prototype.osn_i_vysota_clear = function () {
        this.inp1 = "....";
        this.inp2 = "....";
    };
    FirstPage.prototype.showInterstitialAd = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */]) {
            this.admob.showInterstitial();
        }
    };
    FirstPage.prototype.showAlert = function () {
        var x1 = this.inp1;
        var x2 = this.inp2;
        var x3 = this.inp3;
        var a = x1;
        var b = x2;
        var c = x3;
    };
    //ygol_i_2_storony
    FirstPage.prototype.ygol_i_2_storony1 = function () {
        var alert = this.alertCtrl.create({
            title: 'Ошибка!',
            subTitle: 'Введите верное числовое значение. Треугольник с такими сторонами не существует',
            buttons: ['OK']
        });
        alert.present();
    };
    ;
    //////////////
    FirstPage.prototype.link3stor = function () {
        this.navCtrl.push('FirstPage');
    };
    //////////////
    FirstPage.prototype.osn_i_vysota = function () {
        var s;
        var a = Number(this.inp1);
        var h = Number(this.inp2);
        var numchislo = 3;
        //Проверка положительность введенных чисел
        if (isFinite(a) && (a > 0)) {
            if (isFinite(h) && (h > 0)) {
                s = (a) * 0.5 * h;
                if (numchislo = 3) {
                    s = s.toFixed(numchislo);
                }
                var alert = this.alertCtrl.create({
                    title: 'New Friend!',
                    subTitle: 'Площадь равна S=' + s,
                    buttons: ['OK']
                });
                alert.present();
            }
            else {
                var alert = this.alertCtrl.create({
                    title: 'Ошибка!',
                    subTitle: 'Введите верное числовое значение. Треугольник с такими сторонами не существует',
                    buttons: ['OK']
                });
                alert.present();
            }
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'Ошибка!',
                subTitle: 'Введите верное числовое значение. Треугольник с такими сторонами не существует',
                buttons: ['OK']
            });
            alert.present();
        }
        ;
    };
    ;
    FirstPage.prototype.firstgo = function () {
        this.navCtrl.push(FirstPage_1);
    };
    FirstPage.prototype.homego = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    FirstPage = FirstPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'first-home',template:/*ion-inline-start:"C:\Users\Катя\admob6\src\pages\first\first.html"*/'<ion-header>\n <ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openPage(homePage)">\n        Т\n      </button>\n      <button ion-item (click)="openPage(friendsPage)">\n        Friends\n      </button>\n      <button ion-item (click)="openPage(eventsPage)">\n        Events\n      </button>\n      <button ion-item (click)="closeMenu()">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n \n  <ion-navbar color="red-danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Площадь</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 style="text-align: center">По основанию и высоте</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n \n  <br>\n  \n<!-- <ion-card (click)="link3stor()">\n  <ion-card-header>\n	<b>По трем сторонам</b>\n  </ion-card-header>\n  <ion-card-content>\n     The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n\n\n  <ion-card (click)="showAlert()">\n  <ion-card-header>\n	  <b>По основанию и высоте</b>\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n \n  <ion-card (click)="showAlert()">\n  <ion-card-header>\n	  <b>По 2-м сторонам и углу</b>\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n -->\n  <br>\n     <ion-img style="width:100%; height: 235px;" src="assets/imgs/Osnivysota1.jpg"></ion-img>\n     <br>\n     <br>\n<ion-list>\n\n  \n    <ion-item>\n    <ion-label color="primary" fixed>Основание</ion-label>\n    <ion-input type="number" placeholder="....." id="inp1" [(ngModel)]="inp1"></ion-input>\n  </ion-item>\n <br>\n   <ion-item>\n     <ion-label color="primary" fixed>Высота</ion-label>\n    <ion-input type="number" placeholder="....." id="inp2" [(ngModel)]="inp2" ></ion-input>\n  </ion-item><br>\n</ion-list>\n\n\n    \n\n       \n  <div style="">\n   <div style="margin: auto">\n     <button ion-button (click)="osn_i_vysota()">\n      ВЫЧИСЛИТЬ\n    </button>\n     <button ion-button (click)="osn_i_vysota_clear()" color="red-danger">\n      ОЧИСТИТЬ\n    </button>\n    </div>\n  </div> \n\n       \n\n</ion-content>'/*ion-inline-end:"C:\Users\Катя\admob6\src\pages\first\first.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], FirstPage);
    return FirstPage;
    var FirstPage_1, _a, _b, _c, _d;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SecondPage = (function () {
    function SecondPage(navCtrl, platform, admob, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.admob = admob;
        this.alertCtrl = alertCtrl;
        platform.ready().then(function () {
            var admobid = {
                banner: 'ca-app-pub-3940256099942544/6300978111',
                interstitial: 'ca-app-pub-3940256099942544/1033173712'
            };
            _this.admob.createBanner({
                adId: admobid.banner,
                isTesting: true,
                autoShow: true,
                position: _this.admob.AD_POSITION.BOTTOM_CENTER
            });
            _this.admob.prepareInterstitial({
                adId: admobid.interstitial,
                isTesting: true,
                autoShow: false
            });
        });
    }
    SecondPage.prototype.showInterstitialAd = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */]) {
            this.admob.showInterstitial();
        }
    };
    SecondPage.prototype.tri_storony = function () {
        var x1 = Number(this.inp1);
        var x2 = Number(this.inp2);
        var x3 = Number(this.inp3);
        var s;
        ////////////////////////////////
        var xx;
        var a = x1;
        var b = x2;
        var c = x3;
        //Проверка на числа
        if (isFinite(a) && (a > 0)) {
            if (isFinite(b) && (b > 0)) {
                if (isFinite(c) && (c > 0)) {
                    //Проверка на существование треугольника          
                    if (a < b + c) {
                        if (b < a + c) {
                            if (c < a + b) {
                                xx = (a + b + c) / 2;
                                xx = xx * (xx - a) * (xx - b) * (xx - c);
                                xx = Math.sqrt(xx);
                                s = xx;
                                var alert = this.alertCtrl.create({
                                    title: 'New Friend!',
                                    subTitle: 'Площадь равна S=' + s,
                                    buttons: ['OK']
                                });
                                alert.present();
                            }
                            else {
                                var alert = this.alertCtrl.create({
                                    title: 'Ошибка!',
                                    subTitle: 'Треугольник с такими сторонами не существует. Введите корректные значения',
                                    buttons: ['OK']
                                });
                                alert.present();
                            }
                        }
                        else {
                            var alert = this.alertCtrl.create({
                                title: 'Ошибка!',
                                subTitle: 'Треугольник с такими сторонами не существует. Введите корректные значения',
                                buttons: ['OK']
                            });
                            alert.present();
                        }
                    }
                    else {
                        var alert = this.alertCtrl.create({
                            title: 'Ошибка!',
                            subTitle: 'Треугольник с такими сторонами не существует. Введите корректные значения',
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                    ;
                }
            }
            else {
                var alert = this.alertCtrl.create({
                    title: 'Ошибка!',
                    subTitle: 'Треугольник с такими сторонами не существует. Введите корректные значения',
                    buttons: ['OK']
                });
                alert.present();
            }
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'Ошибка!',
                subTitle: 'Треугольник с такими сторонами не существует. Введите корректные значения',
                buttons: ['OK']
            });
            alert.present();
        }
        ;
        //////////////
    };
    SecondPage.prototype.tri_storony_clear = function () {
        this.inp1 = "....";
        this.inp2 = "....";
        this.inp3 = "....";
    };
    //ygol_i_2_storony
    SecondPage.prototype.homego = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SecondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'second-home',template:/*ion-inline-start:"C:\Users\Катя\admob6\src\pages\second\second.html"*/'<ion-header>\n <ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openPage(homePage)">\n        Т\n      </button>\n      <button ion-item (click)="openPage(friendsPage)">\n        Friends\n      </button>\n      <button ion-item (click)="openPage(eventsPage)">\n        Events\n      </button>\n      <button ion-item (click)="closeMenu()">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n \n  <ion-navbar color="red-danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Площадь</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 style="text-align: center; color:white;">По трем сторонам</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n \n  <br>\n<!-- <ion-card (click)="link3stor()">\n  <ion-card-header>\n	  <b>По трем сторонам</b>\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n\n  <ion-card (click)="showAlert()">\n  <ion-card-header>\n	  <b>По основанию и высоте</b>\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n \n  <ion-card (click)="showAlert()">\n  <ion-card-header>\n	  <b>По 2-м сторонам и углу</b>\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n -->\n      <div>\n      <p style="text-align: center;">\n           <ion-img iom-imgalign style="width:100%; height: 235px;" src="assets/imgs/geron.jpg"></ion-img>\n	  </p>  	\n      </div>\n  \n\n  <br>\n<ion-list>\n\n  \n    <ion-item>\n    <ion-label color="primary" fixed>Сторона A</ion-label>\n    <ion-input type="number" placeholder="....." id="inp1" [(ngModel)]="inp1"></ion-input>\n  </ion-item>\n <br>\n  <ion-item>\n    <ion-label color="primary" fixed>Сторона B</ion-label>\n    <ion-input type="number" placeholder="....." id="inp2" [(ngModel)]="inp2"></ion-input>\n  </ion-item>\n <br>\n   <ion-item>\n     <ion-label color="primary" fixed>Сторона C</ion-label>\n    <ion-input type="number" placeholder="....." id="inp3" [(ngModel)]="inp3" ></ion-input>\n  </ion-item><br>\n\n\n</ion-list>\n\n\n  <div style="">\n   <div style="margin: auto">\n    <button ion-button (click)="tri_storony()">\n      ВЫЧИСЛИТЬ\n    </button>\n          <button ion-button (click)="tri_storony_clear()" color="red-danger">\n      ОЧИСТИТЬ\n    </button>\n    </div>\n  </div>     \n\n       \n\n       \n\n</ion-content>'/*ion-inline-end:"C:\Users\Катя\admob6\src\pages\second\second.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], SecondPage);
    return SecondPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=second.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ThirdPage = (function () {
    function ThirdPage(navCtrl, platform, admob, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.admob = admob;
        this.alertCtrl = alertCtrl;
        platform.ready().then(function () {
            var admobid = {
                banner: 'ca-app-pub-3940256099942544/6300978111',
                interstitial: 'ca-app-pub-3940256099942544/1033173712'
            };
            _this.admob.createBanner({
                adId: admobid.banner,
                isTesting: true,
                autoShow: true,
                position: _this.admob.AD_POSITION.BOTTOM_CENTER
            });
            _this.admob.prepareInterstitial({
                adId: admobid.interstitial,
                isTesting: true,
                autoShow: false
            });
        });
    }
    ThirdPage.prototype.ygol_i_2_storony_clear = function () {
        this.inp1 = "....";
        this.inp2 = "....";
        this.inp3 = "....";
    };
    ThirdPage.prototype.showInterstitialAd = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */]) {
            this.admob.showInterstitial();
        }
    };
    //ygol_i_2_storony
    ThirdPage.prototype.ygol_i_2_storony = function () {
        var a = Number(this.inp1);
        var b = Number(this.inp2);
        var c = Number(this.inp4);
        var s;
        ////////////////////////////////
        var xx;
        //Проверка на числа
        if (isFinite(a) && (a > 0)) {
            if (isFinite(b) && (b > 0)) {
                if (isFinite(c) && (c > 0 && c < 180)) {
                    //Проверка на существование треугольника          
                    s = Math.sin(c / 180 * Math.PI);
                    s = (0.5) * (s * a * b);
                    var alert = this.alertCtrl.create({
                        title: 'New Friend!',
                        subTitle: 'Площадь равна S=' + s,
                        buttons: ['OK']
                    });
                    alert.present();
                }
                else {
                    var alert = this.alertCtrl.create({
                        title: 'Ошибка!',
                        subTitle: 'Введите верное числовое значение. Угол должен быть меньше 180',
                        buttons: ['OK']
                    });
                    alert.present();
                }
                ;
            }
            else {
                var alert = this.alertCtrl.create({
                    title: 'Ошибка!',
                    subTitle: 'Треугольник не существует. Введите корректные значения',
                    buttons: ['OK']
                });
                alert.present();
            }
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'Ошибка!',
                subTitle: 'Треугольник не существует. Введите корректные значения',
                buttons: ['OK']
            });
            alert.present();
        }
    };
    ;
    ThirdPage.prototype.ygol_i_2_storony1 = function () {
        var alert = this.alertCtrl.create({
            title: 'Ошибка!',
            subTitle: 'Введите верное числовое значение. Треугольник с таким сторонами не существует',
            buttons: ['OK']
        });
        alert.present();
    };
    ;
    //////////////
    ThirdPage.prototype.link3stor = function () {
        this.navCtrl.push('FirstPage');
    };
    //////////////
    ThirdPage.prototype.osn_i_vysota = function () {
        var s;
        var a = Number(this.inp1);
        var h = Number(this.inp2);
        //Проверка положительность введенных чисел
        if (isFinite(a) && (a > 0)) {
            if (isFinite(h) && (h > 0)) {
                s = (a) * 0.5 * h;
                var alert = this.alertCtrl.create({
                    title: 'New Friend!',
                    subTitle: 'Площадь равна S=' + s,
                    buttons: ['OK']
                });
                alert.present();
            }
            else {
                var alert = this.alertCtrl.create({
                    title: 'Ошибка!',
                    subTitle: 'Введите верное числовое значение. Треугольник с такими сторонами не существует',
                    buttons: ['OK']
                });
                alert.present();
            }
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'Ошибка!',
                subTitle: 'Введите верное числовое значение. Треугольник с такими сторонами не существует',
                buttons: ['OK']
            });
            alert.present();
        }
        ;
    };
    ;
    ThirdPage.prototype.homego = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ThirdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'third-home',template:/*ion-inline-start:"C:\Users\Катя\admob6\src\pages\third\third.html"*/'<ion-header>\n <ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openPage(homePage)">\n        Т\n      </button>\n      <button ion-item (click)="openPage(friendsPage)">\n        Friends\n      </button>\n      <button ion-item (click)="openPage(eventsPage)">\n        Events\n      </button>\n      <button ion-item (click)="closeMenu()">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n \n  <ion-navbar color="red-danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Площадь test 2</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 style="text-align: center">По двум сторонам <br>и углу между ними</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n \n  <br>\n<!-- <ion-card (click)="link3stor()">\n  <ion-card-header>\n	  <b>По трем сторонам</b>\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n\n  <ion-card (click)="showAlert()">\n  <ion-card-header>\n	  <b>По основанию и высоте</b>\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n \n  <ion-card (click)="showAlert()">\n  <ion-card-header>\n	  <b>По 2-м сторонам и углу</b>\n  </ion-card-header>\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n</ion-card>\n -->\n      <ion-img style="width:100%; height: 235px;"  src="assets/imgs/2storiygol.jpg"></ion-img>\n  <br>\n<ion-list>\n\n  \n    <ion-item>\n    <ion-label color="primary" fixed>Сторона A</ion-label>\n    <ion-input type="number" placeholder="....." id="inp1" [(ngModel)]="inp1"></ion-input>\n  </ion-item>\n <br>\n  <ion-item>\n    <ion-label color="primary" fixed>Сторона B</ion-label>\n    <ion-input type="number" placeholder="....." id="inp2" [(ngModel)]="inp2"></ion-input>\n  </ion-item>\n <br>\n   <ion-item>\n     <ion-label color="primary" fixed>Угол a (град.) </ion-label>\n    <ion-input type="number" placeholder="....." id="inp3" [(ngModel)]="inp4" ></ion-input>\n  </ion-item><br>\n\n</ion-list>\n\n    \n    <button ion-button (click)="ygol_i_2_storony()">\n      ВЫЧИСЛИТЬ\n    </button>\n     <button ion-button (click)="ygol_i_2_storony_clear()" color="red-danger">\n      ОЧИСТИТЬ\n    </button>\n       \n   \n\n</ion-content>'/*ion-inline-end:"C:\Users\Катя\admob6\src\pages\third\third.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], ThirdPage);
    return ThirdPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=third.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Катя\admob6\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List 1</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Катя\admob6\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_pro__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_first_first__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_second_second__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_third_third__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_second_second__["a" /* SecondPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_third_third__["a" /* ThirdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_second_second__["a" /* SecondPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_third_third__["a" /* ThirdPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_pro__["a" /* AdMobPro */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["d" /* NgModel */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Катя\admob6\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu --</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Катя\admob6\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__first_first__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__second_second__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__third_third__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, platform, admob, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.admob = admob;
        this.alertCtrl = alertCtrl;
        platform.ready().then(function () {
            var admobid = {
                banner: 'ca-app-pub-3940256099942544/6300978111',
                interstitial: 'ca-app-pub-3940256099942544/1033173712'
            };
            _this.admob.createBanner({
                adId: admobid.banner,
                isTesting: true,
                autoShow: true,
                position: _this.admob.AD_POSITION.BOTTOM_CENTER
            });
            _this.admob.prepareInterstitial({
                adId: admobid.interstitial,
                isTesting: true,
                autoShow: false
            });
        });
    }
    HomePage.prototype.showInterstitialAd = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */]) {
            this.admob.showInterstitial();
        }
    };
    HomePage.prototype.showAlert = function () {
        var x1 = this.inp1;
        var x2 = this.inp2;
        var x3 = this.inp3;
        var a = x1;
        var b = x2;
        var c = x3;
    };
    HomePage.prototype.firstgo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__first_first__["a" /* FirstPage */]);
    };
    HomePage.prototype.secondgo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__second_second__["a" /* SecondPage */]);
    };
    HomePage.prototype.thirdgo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__third_third__["a" /* ThirdPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Катя\admob6\src\pages\home\home.html"*/'<ion-header>\n <ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openPage(homePage)">\n        Т\n      </button>\n      <button ion-item (click)="openPage(friendsPage)">\n        Friends\n      </button>\n      <button ion-item (click)="openPage(eventsPage)">\n        Events\n      </button>\n      <button ion-item (click)="closeMenu()">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n \n  <ion-navbar color="red-danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>S треугольника</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 style="text-align: center">Ionic Menu Starter 5.4</h3>\n   <ion-img width="100%" src="baikal.jpg"></ion-img>\n   <ion-img width="100%" src="geron.jpg"></ion-img>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n  <br>\n\n  <br>\n <ion-card (click)="firstgo()">\n  <ion-card-header>\n	  <b>По основанию и высоте</b>\n  </ion-card-header>\n  <ion-card-content>\n    Формула нахождения площади треугольника по основанию и высоте.\n  </ion-card-content>\n</ion-card>\n\n  <ion-card (click)="secondgo()">\n  <ion-card-header>\n	  <b>По трем сторонам</b>\n  </ion-card-header>\n  <ion-card-content>\n    Формула Герона для нахождения площади треугольника по трем известным сторонам.\n  </ion-card-content>\n</ion-card>\n \n  <ion-card (click)="thirdgo()">\n  <ion-card-header>\n	  <b>По 2-м сторонам и углу</b>\n  </ion-card-header>\n  <ion-card-content>\n  Формула нахождения площади треугольника по двум сторонам и углу между ними.\n  </ion-card-content>\n</ion-card>\n  <br>\n\n\n<div style="background:url(resources/ios/icon/icon-76@2x.png)"></div>\n	\n\n\n    <br><br>\n    <button ion-button (click)="ygol_i_2_storony1()">Test</button>\n<br><br>\n      <button ion-button secondary (click)="showAlert()" >Show banner</button>\n<br><br>\n    <button ion-button (click)="showInterstitialAd()">Show the interstitial Ad</button>\n    <br><br>\n    \n\n       \n\n       \n\n</ion-content>'/*ion-inline-end:"C:\Users\Катя\admob6\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_pro__["a" /* AdMobPro */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map