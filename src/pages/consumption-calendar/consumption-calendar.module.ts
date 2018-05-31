import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsumptionCalendarPage } from './consumption-calendar';

@NgModule({
  declarations: [
    ConsumptionCalendarPage
  ],
  imports: [
    IonicPageModule.forChild(ConsumptionCalendarPage),
  ],
})

export class ConsumptionCalendarPageModule {}
