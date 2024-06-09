import React from 'react';

const Timer = () => {
    const currentTime = new Date();
    const formattedTime = `01:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

    const timerStyle = {
        flexGrow: '0.08',
        textAlign: 'center',
    }

    const styles = {
        color: 'white',
        textAlign: 'center'
    }
    return (
        <div style={timerStyle}>
            <span style={styles}>{formattedTime}</span>
        </div>
    );
};

export default Timer;
