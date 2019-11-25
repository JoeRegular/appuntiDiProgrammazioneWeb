import React from 'react';
import './Cards.css';

const Card = props => (
    <div style={{ width: '200px' }}>
        <img src={props.image} />
        <div>
            <h5>{props.argument}</h5>
            <button onClick={props.onClick}>Vai all'argomento</button>
        </div>
    </div>
);

export default Card;