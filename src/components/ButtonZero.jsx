import React from 'react';
import './ButtonZero.css';

export const ButtonZero = props => (
  <div
    className="zero-btn" onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);