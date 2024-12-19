import moment from 'moment/moment';
import 'moment/locale/ru'

export default function convertTimeStampToDate(stamp:string):string{
  const date: moment.Moment = moment.unix(+stamp).locale('ru').startOf('hours');
  if (moment().dayOfYear()-date.dayOfYear() >=1)
    return moment.unix(+stamp).locale('ru').startOf('days').fromNow();
  return date.fromNow();
} 
