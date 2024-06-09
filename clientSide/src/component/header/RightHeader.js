import React from 'react';
import styles from './RightHeader.module.css';

const RightHeaderComponent = (props) => {

  return (
    <p className={styles.rightTitle}>
      {props.title}
      <br></br>
      {`תיק מספר ${props.code}`}
    </p>
  );
};

export default RightHeaderComponent;