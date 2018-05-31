export class CalendarDay
{
  private date: number;
  private day: number; // 0: 일 ~ 6: 토
  private dailyTotalMoney: number = 0;
  private dailyTotalCommaMoney: string = '';

  constructor(date, day)
  {
    this.date = date;
    this.day = day;
  }

  public getDate()
  {
    return this.date;
  }

  public getDay()
  {
    return this.day;
  }
}