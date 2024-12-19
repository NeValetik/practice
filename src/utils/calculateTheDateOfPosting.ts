import moment from 'moment/moment';
import 'moment/locale/ru'

export default function calculateTheDateOfPosting(stamp:string):string{
  const date: moment.Moment = moment.unix(+stamp).locale('ru');
    
  return date.dayOfYear() === moment().dayOfYear()? 'Сегодня':date.format('LL');
} 
