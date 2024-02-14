import React from 'react';
import './Memory.css';

function Memory({ image, title, text, left }) {
  return (
    <div className={`memory ${left ? 'left' : 'right'}`}>
        <div className="dot"></div>
        <img src={image} />
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
  );
}

export default Memory;