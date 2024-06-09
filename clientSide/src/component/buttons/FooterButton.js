import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterButton = ({ icon, onClick, label }) => {
    return (
        <button className="btn btn-light mx-2" onClick={onClick}>
            <FontAwesomeIcon icon={icon} />{label}</button>
    );
};

export default FooterButton;
