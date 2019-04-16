export class Day {
  public year: number;
  public month: number;
  public day: number;

  private daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  private daysInMonthLY = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.validate();
  }

  public isLeapYear(): boolean {
    return this.year % 4 === 0 && (this.year % 100 !== 0 || this.year % 400 === 0);
  }

  public getDaysSince1900() {
    const lastYear = this.year - 1;
    const daysBefore1901 = this.getYearAsDays(1900);

    const daysBeforeCurrentYear = this.getYearAsDays(lastYear);

    return daysBeforeCurrentYear - daysBefore1901 + this.getDaysInYear();
  }

  public getDaysInYear(): number {
    return this.getDaysBeforeCurrentMonth() + this.day;
  }

  public getElapsedDaysOf(otherDay: Day) {
    return Math.abs(this.getDaysSince1900() - otherDay.getDaysSince1900()) - 1;
  }

  private validate() {
    if (this.year < 1901 || this.year > 2999) {
      throw new Error('Invalid year.');
    }

    if (this.month < 1 || this.month > 12) {
      throw new Error('Invalid month.');
    }

    if (this.day < 1 || this.day > this.getDaysInMonth(this.month)) {
      throw new Error('Invalid day.');
    }
  }

  private getDaysInMonth(month): number {
    return this.isLeapYear() ? this.daysInMonthLY[month] : this.daysInMonth[month];
  }

  private getYearAsDays(year: number): number {
    return year * 365 + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
  }

  private getDaysBeforeCurrentMonth(): number {
    const daysInMonthToUse = this.isLeapYear() ? this.daysInMonthLY : this.daysInMonth;
    let count = 0;
    for (let month = 0; month < this.month; month++) {
      count += daysInMonthToUse[month];
    }

    return count;
  }
}
