const parseStrToDate = (str: string): { year: number; month: number; day: number } => {
  const splited = str.split('/');

  if (splited.length !== 3) {
    throw new Error('Invalid input format.');
  }

  const date = {
    year: parseInt(splited[2], 10),
    month: parseInt(splited[1], 10),
    day: parseInt(splited[0], 10)
  };

  if (!date.year || !date.month || !date.day) {
    throw new Error('Invalid input format.');
  }

  return date;
};

export const inputParser = {
  parseStrToDate
};
