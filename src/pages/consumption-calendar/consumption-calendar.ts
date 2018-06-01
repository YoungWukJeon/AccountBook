import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// models
import { CalendarDay } from '../../models/calendarday-model';

/**
 * Generated class for the ConsumptionCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consumption-calendar',
  templateUrl: 'consumption-calendar.html',
})

export class ConsumptionCalendarPage {

  calendarHistory: Array<CalendarDay> = [];
  chunkedCalendarHistory: Array<Array<CalendarDay>>;
  year: number;
  month: number;
  firstDay: number;
  dailyHistory: any[];
  monthlyTotalMoney: number = 0;
  monthlyTotalCommaMoney: string;

  chunkWeekly(array: Array<CalendarDay>, size: number)
  {
    let results: Array<Array<CalendarDay>> = [];

    while(array.length)
      results.push(array.splice(0, size));

    return results;
  }

  addCommaInMoney(money: number)
  {
    if( money < 0 )
      return '￦' + money.toString().substring(1, money.toString().length).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    else
      return '￦' + money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  makeCalendarArray()
  {
    // 현재 달의 날짜 추가
    for( var i = 1; i <= new Date(this.year, this.month + 1, 0).getDate(); ++i )
    {
      this.calendarHistory.push(new CalendarDay(i, new Date(this.year, this.month, i).getDay(), 0, false));
    }

    // 지난 달의 날짜 추가
    for( var i = 0; i < this.calendarHistory[i].getDay(); ++i )
    {
      if( this.month == 0 )
      {
        var lastDate = new Date(this.year - 1, 12, 0).getDate();
        this.calendarHistory.unshift(new CalendarDay(lastDate - i, this.calendarHistory[i].getDay() - i - 1, -1, false));
      }
      else
      {
        var lastDate = new Date(this.year, this.month, 0).getDate();
        this.calendarHistory.unshift(new CalendarDay(lastDate - i, this.calendarHistory[i].getDay() - i - 1, -1, false));
      }     
    }

    // 다음 달의 날짜 추가
    for( var firstDate = 1, i = this.calendarHistory[this.calendarHistory.length - firstDate].getDay(); i < 6; ++firstDate, ++i )
    {
      if( this.month == 11 )
        this.calendarHistory.push(new CalendarDay(firstDate, i + 1, 1, false));
      else
        this.calendarHistory.push(new CalendarDay(firstDate, i + 1, 1, false));
    }

    this.calendarHistory.forEach((element) => {
      console.log(this.year + "-0" + this.month + "-" + element.getDate() + ", " + element.getDay());
    });

    this.chunkedCalendarHistory = this.chunkWeekly(this.calendarHistory, 7);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let now = new Date();
    this.year = now.getFullYear();
    this.month = now.getMonth();

    this.makeCalendarArray();

    this.dailyHistory = [
      {
        open: true,
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsumptionCalendarPage');
  }

}
