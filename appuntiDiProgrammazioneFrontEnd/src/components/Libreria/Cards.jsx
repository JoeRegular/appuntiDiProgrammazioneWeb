import React from 'react';
import styles from './Cards.module.css';

const Card = props => (
    <div className={styles.card}>
        { props.image && <img className={styles.cardImgTop} src={props.image} /> }
        <h5 className={styles.nomeArgomento}>{props.argument}</h5>
        <button className={styles.argumentButton}onClick={props.onClick}>Vai all'argomento</button>
    </div>
);

export default Card;