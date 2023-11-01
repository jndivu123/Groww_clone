
import React from 'react';
import styles from '../styles/roundButton.module.css'; // Import the CSS module

const RoundButton = ({ onClick, children, h='10vw', f='3.5vw' }) => {
  return (
    <button style={{
        height:`${h}`,
        width:`${h}`,
        fontSize:`${f}`
    }} className={styles.roundButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundButton;
