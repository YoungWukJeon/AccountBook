import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// pages
import { HomePage } from '../pages/home/home';
// import { DashboardPage } from '../pages/dashboard/dashboard';
import { ConsumptionHistoryPage } from "../pages/consumption-history/consumption-history";
import { ConsumptionCalendarPage } from "../pages/consumption-calendar/consumption-calendar";
import { CalculatorPage } from "../pages/calculator/calculator";
import { ConsumptionStatisticsPage } from "../pages/consumption-statistics/consumption-statistics";
import { SettingPage } from "../pages/setting/setting";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // DashboardPage,
    ConsumptionHistoryPage,
    ConsumptionCalendarPage,
    CalculatorPage,
    ConsumptionStatisticsPage,
    SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // DashboardPage,
    ConsumptionHistoryPage,
    ConsumptionCalendarPage,
    CalculatorPage,
    ConsumptionStatisticsPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
