import React from 'react';
import './NegativeButton.css';

export const NegativeButton = props => {
    let negative_sign = "-";
    return (
        <div
            className="negative-btn" onClick={() => props.handleClick(negative_sign)}
        >
            {props.children}
        </div>
    )
}