
import { Observable, of } from 'rxjs';

export const getHeaderInfo = (participantId) => {
    return Observable.create((observer) => {
        of({
            title: 'משרד המשפטים, ועדת ערר לענייני קורונה - השתתפות בהוצאות קבועות',
            code: '64949-02-22'
        }).subscribe(
            (data) => observer.next(data),
            () => observer.complete()
        );
    });
};