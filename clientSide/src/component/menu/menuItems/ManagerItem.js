import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MenuItem from './MenuItem';

const ManagerItem = () => {

  const managerItemClicked = () => {
    console.log("Manager item clicked");
  };

  const icon = "-person-badge";
  const label = "מנהל דיון";
  const numOfParticipants = 1;//TODO: get from server

  return (
    <MenuItem icon={icon} onClick={managerItemClicked} label={label} numOfParticipants={numOfParticipants} />
  );
};

export default ManagerItem;