import React from 'react';
import { useState, useEffect } from "react";
import CustomContainer from '../../common/CustomContainer';
import CustomRow from '../../common/CustomRow';
import CustomCol from '../../common/CustomCol';
import ParticipantComponent from '../participant/Participant';
import { getAllParticipants } from '../../../services/participant';

const ParticipantScreenComponent = (props) => {

  const [participants, setParticipants] = useState([]);
  const participantId = props.id;
  const judges = participants.filter((participant) => participant.role === 'judge');
  const attendees = participants.filter((participant) => participant.role !== 'judge');

  const getJudges = () => {
    return participants.filter((participant) => participant.role === 'judge');
  };
  const getAttendees = () => {
    return participants.filter((participant) => participant.role !== 'judge');
  };

  const participantStyle = {
    height: '80vh',
  }

  useEffect(() => {
    const subscription = getAllParticipants(participantId)
      .subscribe((data) => setParticipants(data));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div style={participantStyle}>
      <CustomContainer >
        <CustomRow>
          {getJudges()?.map((judge) => {
            return (
              <CustomCol key={judge.id}>
                <ParticipantComponent {...judge} />
              </CustomCol>
            );
          })}
        </CustomRow>
        <br></br>
        <CustomRow>
          {getAttendees()?.map
            ((attendee) => {
              return (
                <CustomCol key={attendee.id}>
                  <ParticipantComponent  {...attendee} />
                </CustomCol>);

            })}
        </CustomRow>
      </CustomContainer>
    </div>
  );
};

export default ParticipantScreenComponent;