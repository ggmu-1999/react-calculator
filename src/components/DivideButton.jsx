import React from 'react';
import './DivideButton.css';

export const DivideButton = props => {
    const divide_sign = "/";
    return (
        <div
            className="divide-btn" onClick={() => props.handleClick(divide_sign)}
        >
            {props.children}
        </div>
    )
}