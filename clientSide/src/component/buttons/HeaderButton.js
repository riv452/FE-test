import React from 'react';
import { Button } from 'react-bootstrap';

const headerButtonstyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textDecoration: 'none',
};

const HeaderButton = ({ children }) => {
    return (
        <Button variant="link" style={headerButtonstyle} >{children}</Button>
    );
};
export default HeaderButton;