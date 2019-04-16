import { inputParser } from './inputPraser';
import { MyDate } from './models/myDate';

const args = process.argv;
if (args.length !== 4) {
  console.error('Usage: <date1> <date2>');
  process.exit(1);
}

let date1: MyDate;
let date2: MyDate;

const errors: string[] = [];

try {
  const dateData1 = inputParser.parseStrToDate(args[2]);
  date1 = new MyDate(dateData1.year, dateData1.month, dateData1.day);
} catch (err) {
  errors.push(`date1: ${err.message}`);
}

try {
  const dateData2 = inputParser.parseStrToDate(args[3]);
  date2 = new MyDate(dateData2.year, dateData2.month, dateData2.day);
} catch (err) {
  errors.push(`date2: ${err.message}`);
}

if (errors.length > 0) {
  errors.forEach(x => {
    console.log(x);
  });
  process.exit(1);
}

const elapsedDays = date1.getElapsedDaysOf(date2);
console.log(`No of elapsed days: ${elapsedDays}`);
process.exit();
