import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MenuItem from './MenuItem';

const SettingItem = () => {

    const icon = "-gear";
    const label = "הגדרות";
    const settingButtonClicked = () => {
        console.log("Settings button clicked");
    };

    return (
        <MenuItem icon={icon} onClick={settingButtonClicked} label={label} />
    );
};

export default SettingItem;