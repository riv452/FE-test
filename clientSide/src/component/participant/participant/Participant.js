import React from 'react';
import CustomRow from '../../common/CustomRow';
import CustomCol from '../../common/CustomCol';
import ParticipantTitleComponent from '../participantTitle/ParticipantTitle';
import ParticipantFooterComponent from '../participantFooter/ParticipantFooter';
import style from './Participant.module.css';

const ParticipantComponent = (props) => {
    const participantStyles = {
        height: props.role === "judge" ? "38vh" : "32vh",
        backgroundColor: "beige",
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    }

    return (
        <div style={participantStyles}>
            <CustomRow>
                <CustomRow>
                    <div className={style.title}>
                        <ParticipantTitleComponent {...props} />
                    </div>
                </CustomRow>
            </CustomRow>
            <ParticipantFooterComponent {...props} />
        </div>
    );
};

export default ParticipantComponent;