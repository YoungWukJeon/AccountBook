export class CalendarDay
{
  private date: number;
  private day: number; // 0: 일 ~ 6: 토
  private dateType: number; // -1: 이전 월, 0: 해당 월, 1: 다음 월
  private holiDay: boolean;  // 휴일 여부
  private dailyTotalMoney: number = 0;
  private dailyTotalCommaMoney: string = '';

  constructor(date, day, dateType, holiDay)
  {
    this.date = date;
    this.day = day;
    this.dateType = dateType;
    this.holiDay = holiDay;
  }

  public getDate()
  {
    return this.date;
  }

  public getDay()
  {
    return this.day;
  }

  public getDateType()
  {
    return this.dateType;
  }

  public isHoliDay()
  {
    return this.holiDay;
  }
}