import React from 'react';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import FooterButton from './FooterButton';
import { SharingFunction } from '../../services/httpService';

const SharingButton = () => {

    const sharingButtonClicked = () => {
        SharingFunction();//update the server
    };

    return (
        <FooterButton onClick={sharingButtonClicked} icon={faShareSquare} label={"שיתוף"}>
        </FooterButton>
    );
};

export default SharingButton;