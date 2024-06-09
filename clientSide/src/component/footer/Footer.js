import React from 'react';
import CustomCol from '../common/CustomCol';
import CustomRow from '../common/CustomRow';
import VidioButton from '../buttons/VidioButton';
import MicrophoneButton from '../buttons/MicrophoneButton';
import SharingButton from '../buttons/SharingButton';
import LiveButton from '../buttons/LiveButton';
import Timer from '../buttons/Timer';

const firstColStyle = {
    minWidth: '25vh',
}

const secondColStyle = {
    minWidth: '50vh',
}

const thirdColStyle = {
    minWidth: '25vh',
}

const cernternStyle = {
    display: 'flex',
    alignItems: 'center'
}

const FooterComponent = () => {
    return (
        <>
            <CustomRow>
                <CustomCol style={firstColStyle}>
                    <div className="d-flex" style={cernternStyle}>
                        <LiveButton />
                        <Timer />
                    </div>
                </CustomCol>
                <CustomCol style={secondColStyle}>
                    <VidioButton />
                    <MicrophoneButton />
                    <SharingButton />
                </CustomCol>
                <CustomCol style={thirdColStyle}></CustomCol>
            </CustomRow>

        </>
    );
}
export default FooterComponent; 