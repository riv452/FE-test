import React from 'react';
import { Badge } from 'react-bootstrap';

const ParticipantTitleComponent = (props) => {
    return (

        <Badge variant="light" className="btn-block "
            style={{ backgroundColor: '#d3d3d3' }} >
            <span style={{ color: 'white', fontSize: 18 }}>{props.description}</span>
        </Badge>
    );
};

export default ParticipantTitleComponent;