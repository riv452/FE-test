import lawyer1Image from '../images/lawyer.png';
import lawyer2Image from '../images/lawyer2.png';
import judge from '../images/‏‏ju.png';
import { Observable } from 'rxjs';
// NOTE: mock data
const participantsData = [
  {
    id: 234,
    image: lawyer1Image,
    name: 'עו"ד שושנה שושני',
    role: "lawyer",
    description: "צד משיב",
  },
  {
    id: 123,
    image: lawyer2Image,
    name: 'עו"ד קובי יעקובי',
    role: "lawyer",
    description: "צד עורר",
  },
  {
    id: 345,
    image: judge,
    name: "כבוד השופטת ישראל ישראלוף",
    role: "judge",
    description: "ועדת ערר לענייני קורונה",
  },
];

export const getAllParticipants = (id) => {
  return Observable.create((observer) => {
    setTimeout(() => {
      const participants = participantsData;
      observer.next(participants);
      observer.complete();
    });
  });
};