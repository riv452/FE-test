import React from 'react';
import BootstrapRow from 'react-bootstrap/Row';

const rowStyles = {
    padding: '10px',
};

const CustomRow = props => {
    const { children } = props;
    return <BootstrapRow styles={rowStyles}> {children} </BootstrapRow>;
};

export default CustomRow;