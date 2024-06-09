import { useEffect, useState } from 'react';
import LeftHeaderComponent from "./LeftHeader";
import RightHeaderComponent from "./RightHeader";
import { getHeaderInfo } from '../../services/headerInfo';
import CustomCol from '../common/CustomCol';

const MeetingHeaderComponent = (props) => {

  const [headerInfo, setHeaderInfo] = useState({});
  const participantId = props.id;

  useEffect(() => {
    const subscription = getHeaderInfo(participantId).subscribe(
      (data) => {
        setHeaderInfo(data);
      });
    return () => subscription.unsubscribe();

  }, [participantId]);

  return (
    <>
      <CustomCol >
        <LeftHeaderComponent />
      </CustomCol>
      <CustomCol>
        <RightHeaderComponent title={headerInfo.title} code={headerInfo.code} />
      </CustomCol>
    </>
  );
};
export default MeetingHeaderComponent;