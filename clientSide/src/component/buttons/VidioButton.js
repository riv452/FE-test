import React from 'react';
import { useState } from "react";
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import FooterButton from './FooterButton';
import { toggleCameraFunction } from '../../services/httpService';

const VidioButton = () => {

  const vidioButtonClicked = () => {
    toggleCameraFunction(); //update the server
  };

  return (
    <FooterButton onClick={vidioButtonClicked} icon={faVideo} label={"מצלמה"} />

  );
};

export default VidioButton;