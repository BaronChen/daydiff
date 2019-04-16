import { expect } from 'chai';
import * as moment from 'moment';
import { Day } from './day';

describe('Day class', () => {
  describe('isLeapYear', () => {
    const isLeapYearTheories: Array<{ year: number; expected: boolean }> = [
      { year: 1996, expected: true },
      { year: 1960, expected: true },
      { year: 1972, expected: true },
      { year: 2004, expected: true },
      { year: 2252, expected: true },
      { year: 2828, expected: true },
      { year: 2000, expected: true },
      { year: 2400, expected: true },
      { year: 2200, expected: false },
      { year: 2300, expected: false },
      { year: 1970, expected: false },
      { year: 2011, expected: false },
      { year: 2518, expected: false }
    ];

    isLeapYearTheories.forEach(theory => {
      it(`${theory.year} is leap year: ${theory.expected}`, () => {
        const day = new Day(theory.year, 1, 1);
        expect(day.isLeapYear()).to.equal(theory.expected);
      });
    });
  });

  describe('constructor', () => {
    describe('wrong year theory', () => {
      const wrongYearTheories: number[] = [3000, 1899, 4567, 1002];

      wrongYearTheories.forEach(theory => {
        it(`Year ${theory} is not valid`, () => {
          expect(() => new Day(theory, 1, 1)).to.throw('Invalid year');
        });
      });
    });

    describe('wrong month theory', () => {
      const wrongMonthTheories: number[] = [13, 0, -1, 1000];

      wrongMonthTheories.forEach(theory => {
        it(`Month ${theory} is not valid`, () => {
          expect(() => new Day(1988, theory, 1)).to.throw('Invalid month');
        });
      });
    });

    describe('wrong day theory', () => {
      const wrongDateTheories: Array<{ year: number; month: number; day: number }> = [
        {
          year: 1988,
          month: 12,
          day: 32
        },
        {
          year: 2012,
          month: 1,
          day: 0
        },
        {
          year: 2100,
          month: 2,
          day: 29
        }
      ];

      wrongDateTheories.forEach(theory => {
        it(`${theory.day}/${theory.month}/${theory.year} is not valid`, () => {
          expect(() => new Day(theory.year, theory.month, theory.day)).to.throw('Invalid day');
        });
      });
    });

    describe('valid day theory', () => {
      const validDateTheories: Array<{ year: number; month: number; day: number }> = [
        {
          year: 1988,
          month: 12,
          day: 1
        },
        {
          year: 2000,
          month: 2,
          day: 29
        },
        {
          year: 1996,
          month: 2,
          day: 29
        },
        {
          year: 2100,
          month: 2,
          day: 28
        },
        {
          year: 2717,
          month: 6,
          day: 25
        },
        {
          year: 1945,
          month: 8,
          day: 31
        }
      ];

      validDateTheories.forEach(theory => {
        it(`${theory.day}/${theory.month}/${theory.year} is valid`, () => {
          expect(() => new Day(theory.year, theory.month, theory.day)).to.not.throw();
        });
      });
    });
  });

  describe('getDaysInYear', () => {
    const theories: Array<{ year: number; month: number; day: number }> = [
      {
        year: 1901,
        month: 1,
        day: 1
      },
      {
        year: 2999,
        month: 12,
        day: 31
      },
      {
        year: 1902,
        month: 2,
        day: 1
      },
      {
        year: 1988,
        month: 12,
        day: 1
      },
      {
        year: 2000,
        month: 3,
        day: 15
      },
      {
        year: 2000,
        month: 1,
        day: 12
      },
      {
        year: 1996,
        month: 2,
        day: 29
      },
      {
        year: 2100,
        month: 5,
        day: 12
      },
      {
        year: 2717,
        month: 6,
        day: 25
      },
      {
        year: 1945,
        month: 8,
        day: 31
      }
    ];

    theories.forEach(theory => {
      it(`should get correct days in year for ${theory.day}/${theory.month}/${theory.year}`, () => {
        const day = new Day(theory.year, theory.month, theory.day);
        const momentDay = moment(new Date(theory.year, theory.month - 1, theory.day));
        expect(day.getDaysInYear()).to.equal(momentDay.dayOfYear());
      });
    });
  });

  describe.only('getDaysSince1900', () => {
    const theories: Array<{ year: number; month: number; day: number }> = [
      {
        year: 1901,
        month: 1,
        day: 1
      },
      {
        year: 1902,
        month: 2,
        day: 1
      },
      {
        year: 1988,
        month: 12,
        day: 1
      },
      {
        year: 2000,
        month: 3,
        day: 15
      },
      {
        year: 2000,
        month: 1,
        day: 12
      },
      {
        year: 1996,
        month: 2,
        day: 29
      },
      {
        year: 2100,
        month: 5,
        day: 12
      },
      {
        year: 2717,
        month: 6,
        day: 25
      },
      {
        year: 1945,
        month: 8,
        day: 31
      }
    ];

    theories.forEach(theory => {
      it(`should get correct days since 1900 for ${theory.day}/${theory.month}/${
        theory.year
      }`, () => {
        const day = new Day(theory.year, theory.month, theory.day);
        const momentDay = moment(new Date(theory.year, theory.month - 1, theory.day));
        const momentDay1900 = moment(new Date(1900, 11, 31));
        expect(day.getDaysSince1900()).to.equal(
          Math.floor(moment.duration(momentDay.diff(momentDay1900)).asDays())
        );
      });
    });
  });
});
