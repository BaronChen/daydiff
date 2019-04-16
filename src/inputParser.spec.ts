import { expect } from 'chai';
import { inputParser } from './inputPraser';

describe('inputParse', () => {
  describe('parseStrToDate', () => {
    const wrongInputTheories: string[] = [
      '01',
      '01/02',
      '01/03/',
      '01021999',
      '00/00/0000',
      'a',
      'a/b',
      'dd/mm/yyyy'
    ];

    wrongInputTheories.forEach(theory => {
      it(`Input string ${theory} is not valid`, () => {
        expect(() => inputParser.parseStrToDate(theory)).to.throw('Invalid input format.');
      });
    });

    // in terms of the parser's responsibility, a  five digit year still a valid format
    const correctInputTheories: Array<{
      str: string;
      expected: { year: number; month: number; day: number };
    }> = [
      { str: '01/02/1988', expected: { year: 1988, month: 2, day: 1 } },
      { str: '02/03/1987', expected: { year: 1987, month: 3, day: 2 } },
      { str: '00021/003/1987', expected: { year: 1987, month: 3, day: 21 } },
      { str: '0001/012/1975', expected: { year: 1975, month: 12, day: 1 } },
      { str: '0001/012/196666', expected: { year: 196666, month: 12, day: 1 } }
    ];

    correctInputTheories.forEach(theory => {
      it(`Input string ${theory.str} could be parsed`, () => {
        expect(inputParser.parseStrToDate(theory.str)).to.deep.equal(theory.expected);
      });
    });
  });
});
