import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsumptionStatisticsPage } from './consumption-statistics';

@NgModule({
  declarations: [
    ConsumptionStatisticsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsumptionStatisticsPage),
  ],
})
export class ConsumptionStatisticsPageModule {}
