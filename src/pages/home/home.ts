import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Pages
// import { DashboardPage } from "../dashboard/dashboard";
import { ConsumptionHistoryPage } from "../consumption-history/consumption-history";
import { ConsumptionCalendarPage } from "../consumption-calendar/consumption-calendar";
import { CalculatorPage } from "../calculator/calculator";
import { ConsumptionStatisticsPage } from "../consumption-statistics/consumption-statistics";
import { SettingPage } from "../setting/setting";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  tabs: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.tabs = [
      ConsumptionHistoryPage,
      ConsumptionCalendarPage,
      CalculatorPage,
      ConsumptionStatisticsPage,
      SettingPage
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
