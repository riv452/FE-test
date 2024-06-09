import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MenuItem from './MenuItem';

const ProfileItem = () => {

  const icon = "-file -earmark";
  const label = "פרטי דיון";
  const profileItemClicked = () => {
    console.log("Profile button clicked");
  };

  return (
    <MenuItem icon={icon} onClick={profileItemClicked} label={label} />
  );
};
export default ProfileItem;