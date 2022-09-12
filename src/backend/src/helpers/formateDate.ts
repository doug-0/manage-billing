const moment = require('moment');

const formateDate = (date: string, numberParcel: number): string => {
  if (!numberParcel || numberParcel === 0) {
    const myNewDate = moment(date).format('DD/MM/YYYY');

    return myNewDate;
  }

  const myNewDate = moment(date).add(numberParcel, 'month').format('DD/MM/YYYY');

  return myNewDate;
};

export default formateDate;
