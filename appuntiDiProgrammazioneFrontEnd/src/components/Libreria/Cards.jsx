import React from 'react';
import styles from './Cards.module.css';

const Card = props => (
    <div className={styles.card}>
        <img className={styles.cardImgTop} src={props.image} />
        <h5>{props.argument}</h5>
        <button onClick={props.onClick}>Vai all'argomento</button>
    </div>
);

export default Card;