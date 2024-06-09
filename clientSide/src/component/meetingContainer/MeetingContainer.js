import React from 'react';
import CustomContainer from '../common/CustomContainer';
import CustomRow from '../common/CustomRow';
import MeetingHeaderComponent from '../header/MeetingHeader';
import ParticipantScreenComponent from '../participant/participantScreen/ParticipantScreen';
import FooterComponent from '../footer/Footer';
import CustomCol from '../common/CustomCol';
import MenuBarComponent from '../menu/menuBar/MenuBar';
import styles from './MeetingContainer.module.css';

const MeetingContainerComponent = (props) => {

  const participantId = props.id;
  return (
    <div className={styles.container}>
      <CustomContainer >
        <CustomCol >
          <div className={styles.headerStyle}>
            <CustomRow className="justify-content-between" >
              <MeetingHeaderComponent id={participantId} />
            </CustomRow>
          </div>
          <div className={styles.participantScreenStyle}>
            <CustomRow >
              <ParticipantScreenComponent id={participantId} />
            </CustomRow>
          </div>
          <FooterComponent />
        </CustomCol>
        <CustomCol>
          <MenuBarComponent id={participantId} />
        </CustomCol>
      </CustomContainer>
    </div>
  );
};

export default MeetingContainerComponent;