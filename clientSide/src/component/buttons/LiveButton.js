import React from 'react';
import { disconnectFunction } from '../../services/httpService';

const LiveButton = () => {

  const liveButtonClicked = () => {
    disconnectFunction();//update the server
  };

  return (
    <button type="button" class="btn btn-danger" onClick={liveButtonClicked}>Live</button>
  );
};

export default LiveButton;