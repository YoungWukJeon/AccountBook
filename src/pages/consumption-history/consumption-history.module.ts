import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsumptionHistoryPage } from './consumption-history';

@NgModule({
  declarations: [
    ConsumptionHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsumptionHistoryPage),
  ],
})
export class ConsumptionHistoryPageModule {}
