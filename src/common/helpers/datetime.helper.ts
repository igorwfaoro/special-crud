import moment from 'moment';

export abstract class DatetimeHelper {

    public static moment = moment;

    public static calendar(date: string): string {
        return moment(date).calendar();
    }

    public static fromNow(date: string): string {
        return moment(date).fromNow();
    }
}