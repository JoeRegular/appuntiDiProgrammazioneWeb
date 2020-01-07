import React, { useState } from 'react';
import styles from './Libreria.module.css';
import buttonStyle from './Button.module.css';

const Titolo = props => <h1 className={styles.titolo}>{props.children}</h1>;
const Sottotitolo = props => <h2 className={styles.sottotitolo}>{props.children}</h2>;
const CodeBox = props => <div className={styles.CodeBox}>{props.children}</div>;

const Button = (props) => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => { if (props.canLoad) {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    } };

    const classi = [buttonStyle.Button];
    switch (props.type) {
        case 'success': classi.push(buttonStyle.success); break;
        case 'error': classi.push (buttonStyle.error); break;
        default: break;
    }
    switch (props.size) {
        case 'big': classi.push(buttonStyle.big); break;
        default: break;
    }
    if (props.disabled) classi.push(buttonStyle.disabled);
    return (
        <button className={classi.join(' ')} onClick={startLoading}>{
            loading
            ? <i className="fas fa-spinner fa-spin" />
            : props.children
        }</button>
    );
}

export {
    Titolo,
    Sottotitolo,
    CodeBox,
    Button,
}