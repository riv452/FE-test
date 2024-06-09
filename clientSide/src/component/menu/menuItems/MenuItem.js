import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './MenuItem.module.css';

const MenuItem = ({ icon, onClick, label, numOfParticipants }) => {

    const isIconContainPeople = icon.includes("people") || icon.includes("person");

    return (
        <div className={styles.rightMenuButton} onClick={onClick}>
            <i className={`bi bi${icon} ${styles.rightMenuIcon}`}></i>
            {isIconContainPeople && <span className={styles.notificationBadge}>{numOfParticipants}</span>}
            <span className={styles.rightMenuButtonText}>{label}</span>
        </div>
    );
};

export default MenuItem;