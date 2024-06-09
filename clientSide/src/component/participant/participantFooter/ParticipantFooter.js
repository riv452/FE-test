import React from 'react';
import CustomRow from '../../common/CustomRow';
import CustomCol from '../../common/CustomCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import styles from './ParticipantFooter.module.css';
import { useState } from "react";
import israelLogo from '../../../images/logo.png';

const ParticipantFooterComponent = (props) => {

  const [isMicrophoneClicked, setIsMicrophoneClicked] = useState(false);
  const isMicrophoneMuted = !isMicrophoneClicked;

  const microphoneClicked = () => {
    setIsMicrophoneClicked(true);
  };

  const microphoneStyle = {
    marginTop: '1vh',
  }

  const footerStyle = {
    width: '100vh',
  }

  return (
    <div className={styles.participantFooter}>
      <CustomRow >
        <CustomCol style={microphoneStyle}>
          <div className={"d-flex"}>
            <button className="btn btn-light mx-2" disabled={isMicrophoneClicked} onClick={microphoneClicked}>
              <FontAwesomeIcon icon={faMicrophone} />
            </button>
          </div>
        </CustomCol>
        <CustomCol style={footerStyle} >
          <span className={styles.description}>
            {props.description}
          </span>
          <br></br>
          <span className={styles.name}>
            {props.name}
          </span>
        </CustomCol>
        {/* //TODO: add israel logo to judge */}
        {/* {props.role==="judge" ? <CustomCol>
           <img src={israelLogo} alt="סמל מדינת ישראל" className={styles.israelLogo} />
        </CustomCol>
        :"" } */}
      </CustomRow>
    </div>
  );
};
export default ParticipantFooterComponent;