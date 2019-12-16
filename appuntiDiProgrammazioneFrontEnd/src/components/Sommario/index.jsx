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

  const [tabIndex, setTabIndex] = useState(0);
  const [argument, setArgument] = useState('');

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

  return (
    <div>
      <nav className={styleSommario.header}>
        {/* Qui puoi inserire un titolo per l'applicazione */}
        <h1 style={{ color: 'white', fontSize: '24px', cursor: 'pointer' }} onClick={() => setArgument('')}>Appunti di programmazione</h1>
        <ul className={styles.menu}>
          <li onClick={() => setArgument('esercizi')}>Esercizi</li>
          <li onClick={() => setArgument('css')}>CSS</li>
          <li onClick={() => setArgument('javascript')}>Javascript</li>
          <li onClick={() => setArgument('react')}>React</li>
        </ul>
      </nav>
      <div>
        { argument !== ''
          ? (
            <MasterDetailPage title={argumentsList[tabIndex].title}>
              {argumentsList[tabIndex].component}
            </MasterDetailPage>
          )
          : (<div className={styles.homeMenu}>
              <Card argument="esercizi" image={eserciziImg} onClick={() => setArgument('esercizi')}/>
              <Card argument="CSS" image={CSSImg} onClick={() => setArgument('css')}/>
              <Card argument="javascript" image={jsImg} onClick={() => setArgument('javascript')}/>
              <Card argument="react" image={reactImg} onClick={() => setArgument('react')}/>
            </div>)
        }
      </div>
    </div>
  );
}

export default Sommario;