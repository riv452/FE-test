import { Button } from 'react-bootstrap';
import React from 'react';
import { disconnectFunction } from '../../services/httpService';

const ExitButton = () => {
    const exsitButtonStyle = {
        bottom: '16%',
    }
    const exitButtonClicked = () => {
        disconnectFunction();//update the server
    };
    return (
        <Button variant="outline-danger" size="lg" className="rounded-pill" style={exsitButtonStyle}
            onClick={exitButtonClicked}>יציאה מהדיון </Button>
    );
};

export default ExitButton;
