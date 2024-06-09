import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VscArrowBoth } from "react-icons/vsc";
import { BsShield } from "react-icons/bs";
import HeaderButton from '../buttons/HeaderButton';

const LeftHeaderComponent = () => {

  const recordStyle = {
    color: 'red',
  }

  return (
    <div className="d-flex">
      <HeaderButton>
        <span style={recordStyle}>●</span>הקלט
      </HeaderButton>
      <HeaderButton>
        <BsShield />
      </HeaderButton>
      <HeaderButton>
        <VscArrowBoth />
      </HeaderButton>
    </div>
  );
};

export default LeftHeaderComponent;

