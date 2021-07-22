import React from 'react';
import './Scss/Button.scss';

const Button = ({ text, type, size }) => {
  return <button className={`btn ${type}  ${size}`}>{text}</button>;
};

export default Button;
