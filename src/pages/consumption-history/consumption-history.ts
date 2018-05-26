import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConsumptionHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consumption-history',
  templateUrl: 'consumption-history.html',
})

export class ConsumptionHistoryPage {

  dailyHistory: any[];
  monthlyTotalMoney: number = 0;
  monthlyTotalCommaMoney: string;

  addCommaInMoney(money: number)
  {
    if( money < 0 )
      return '￦' + money.toString().substring(1, money.toString().length).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    else
      return '￦' + money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.dailyHistory = [
      {
        open: false,
        date: '2018-05-18(금)',
        totalMoney: -11021,
        totalCommaMoney: '',
        history: [
          {
            no: '1',  // 번호
            time: '10:51',  // 결제 시간
            money: -11021, // 결제 금액
            commaMoney: '',
            category1: '식비',  // 상위 카테고리
            category2: '식사/간식',  // 하위 카테고리
            content: '치킨zzzzzzzzzzzzzzzzzzzzzzzzzzzzsssss',  // 내용
            paymentMethod: '카드',  // 결제 방법
            paymentProvider: '우체국',  // 결제 업체
            installmentPeriod: '0',  // 할부기간
            memo: ''  // 메모
          },
          {
            no: '2',  // 번호
            time: '19:17',  // 결제 시간
            money: -3000000, // 결제 금액
            commaMoney: '',
            category1: '금융 거래',  // 상위 카테고리
            category2: '출금',  // 하위 카테고리
            content: 'CD지급',  // 내용
            paymentMethod: '카드',  // 결제 방법
            paymentProvider: '우체국',  // 결제 업체
            installmentPeriod: '0',  // 할부기간
            memo: ''  // 메모
          },
          {
            no: '3',  // 번호
            time: '19:17',  // 결제 시간
            money: 3000000, // 결제 금액
            commaMoney: '',
            category1: '금융 거래',  // 상위 카테고리
            category2: '',  // 하위 카테고리
            content: '현금화',  // 내용
            paymentMethod: '현금',  // 결제 방법
            paymentProvider: '',  // 결제 업체
            installmentPeriod: '0',  // 할부기간
            memo: ''  // 메모
          },
        ]
      },
      {
        open: false,
        date: '2018-05-17(목)',
        totalMoney: 27000,
        totalCommaMoney: '',
        history: [
          
        ]
      },
      {
        open: false,
        date: '2018-05-16(수)',
        totalMoney: 0,
        totalCommaMoney: '',
        history: [
          
        ]
      }
    ];

    this.dailyHistory.forEach((element) => {
      element.totalCommaMoney = this.addCommaInMoney(element.totalMoney);
      this.monthlyTotalMoney += element.totalMoney;

      element.history.forEach((element2) => {
        element2.commaMoney = this.addCommaInMoney(element2.money);
      });
    });

    this.monthlyTotalCommaMoney = this.addCommaInMoney(this.monthlyTotalMoney);
  }

  historyToggle(historys: any) {
    historys.open = !historys.open;
  }

  openHistory(history: string) {
    alert(history.toString());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsumptionHistoryPage');
  }

}
