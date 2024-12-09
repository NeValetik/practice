import moment from "moment/moment";
import 'moment/locale/ru'

export default function convertTimeStampToDate(stamp){
    const date = moment.unix(stamp).locale("ru").startOf("часы");
    if (moment().dayOfYear()-date.dayOfYear() >=1)
        return moment.unix(stamp).locale("ru").startOf('дни').fromNow();
    return date.fromNow();
} 
