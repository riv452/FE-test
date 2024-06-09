import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MenuItem from './MenuItem';
import { useState, useEffect } from "react";
import { getAllParticipants } from '../../../services/participant';

const UserItem = (props) => {
    const icon = "-people";
    const label = " אנשים";
    const [participants, setParticipants] = useState([]);
    const participantId = props.id;
    const numOfParticipants = participants?.length;

    const userItemClicked = () => {
        console.log("User button clicked");
    };
    useEffect(() => {
        const subscription = getAllParticipants(participantId)
            .subscribe((data) => setParticipants(data));
        return () => subscription.unsubscribe();
    }, []);

    return (
        <MenuItem icon={icon} onClick={userItemClicked} label={label} numOfParticipants={numOfParticipants} />
    );
};
export default UserItem;