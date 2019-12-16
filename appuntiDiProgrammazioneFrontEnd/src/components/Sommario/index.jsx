import React, { useState } from "react";
import MasterDetailPage from "./MasterDetailPage";
import styles from "./masterdetail.module.css";
import styleSommario from "./sommario.module.css";
import reactArgumentsList from "../Argomenti React/config";
import javascriptArgumentsList from "../Argomenti Javascript/config";
import eserciziArgumentsList from '../Esercizi/config';
import cssArgumentsList from '../Argomenti CSS/config';
import Card from '../Libreria/Cards';
import eserciziImg from '../../images/esercizi.gif';
import jsImg from '../../images/js.png';
import reactImg from '../../images/react.jpg';
import CSSImg from '../../images/CSS.jpg';


const Sommario = () => {

  const [tabIndex, setTabIndex] = useState(null); //non voglimo che ci sia un micro-argomento di default e indichiamo null
  const [argument, setArgument] = useState(''); //lasciamo il campo vuoto per fare in modo che nulla venga selezionato

  // vecchia soluzione usando un if tra due scelte
  // const argumentsList = argument === 'react' ? reactArgumentsList : javascriptArgumentsList;

  // nuova soluzione usando il costrutto switch case
  let argumentsList;
  switch (argument) {
    case 'react': argumentsList = reactArgumentsList; break;
    case 'javascript': argumentsList = javascriptArgumentsList; break;
    case 'css': argumentsList = cssArgumentsList; break;
    default: argumentsList = eserciziArgumentsList; break;
  }

  const handleClick = i => setTabIndex(i);

  const cambiaArgomento = arg => {
    setTabIndex(null); // de-selezioniamo il micro-argomento
    setArgument(arg); // selezioniamo il macro-argomento selezionato
  }

  return (
    <div>
      <nav className={styleSommario.header}>
        {/* Qui puoi inserire un titolo per l'applicazione */}
        <h1 style={{ color: 'white', fontSize: '24px', cursor: 'pointer' }} onClick={() => cambiaArgomento('')}>Appunti di programmazione</h1>
        <ul className={styles.menu}>
          <li onClick={() => cambiaArgomento('esercizi')}>Esercizi</li>
          <li onClick={() => cambiaArgomento('css')}>CSS</li>
          <li onClick={() => cambiaArgomento('javascript')}>Javascript</li>
          <li onClick={() => cambiaArgomento('react')}>React</li>
        </ul>
      </nav>
      <div>
        { argument === ''
          // primo caso: il macro-argomento non è stato scelto, mostra elenco macro-argomenti
          ? (<div className={styles.homeMenu}>
            <Card argument="esercizi" image={eserciziImg} onClick={() => cambiaArgomento('esercizi')}/>
            <Card argument="CSS" image={CSSImg} onClick={() => cambiaArgomento('css')}/>
            <Card argument="javascript" image={jsImg} onClick={() => cambiaArgomento('javascript')}/>
            <Card argument="react" image={reactImg} onClick={() => cambiaArgomento('react')}/>
          </div>)
          : tabIndex === null
            // secondo caso: il macro-argomento è stato scelto, ma il micro-argomento no, mostra elenco micro-argomenti
            ? (<div className={styles.homeMenu}>
              {/* la prop key serve a React per differenziare le diverse Card (micro-argomenti) che visualizza sulla pagina, deve essere diversa per ogni micro-argomento */}
              { argumentsList.map((argument, i) => <Card key={`${argument.title}_${i}`} argument={argument.title} onClick={() => handleClick(i)}/>) }
            </div>)
            // terzo caso: il macro-argomento ed il micro-argomento sono stati scelti, mostra la scheda del micro-argomento
            : (<MasterDetailPage title={argumentsList[tabIndex].title}>
              {argumentsList[tabIndex].component}
            </MasterDetailPage>)
        }
      </div>
    </div>
  );
}

export default Sommario;