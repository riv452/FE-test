import React from 'react';
import { useState } from "react";
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import FooterButton from './FooterButton';
import { toggleMuteFunction } from '../../services/httpService';

const MicrophoneButton = () => {

    const [isMicrophoneMuted, setIsMicrophoneMuted] = useState(true);
    const microphoneButtonClicked = () => {
        toggleMuteFunction();  //update the server
        setIsMicrophoneMuted(false);
    };

    return (
        <FooterButton onClick={microphoneButtonClicked} icon={faMicrophone} label={"מיקרופון"} />
    );
};

export default MicrophoneButton;