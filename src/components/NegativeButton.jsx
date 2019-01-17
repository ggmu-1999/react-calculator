import React from 'react';
import './NegativeButton.css';

export const NegativeButton = props => {
    return (
        <div
            className="negative-btn" onClick={() => props.handleClick()}
        >
            {props.children}
        </div>
    )
}