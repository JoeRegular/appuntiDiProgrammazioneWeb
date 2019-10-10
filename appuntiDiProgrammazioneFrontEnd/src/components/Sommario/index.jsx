import React, { useState } from "react";
import MasterDetailPage from "./MasterDetailPage";
import MasterDetailSideBarTab from "./MasterDetailSideBarTab";
import styles from "./masterdetail.module.css";
import reactArgumentsList from "../Argomenti React/config";
import javascriptArgumentsList from "../Argomenti Javascript/config";
import eserciziArgumentsList from '../Esercizi/config';


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
    default: argumentsList = eserciziArgumentsList; break;
  }

  const handleClick = i => setTabIndex(i);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        {/* Qui puoi inserire un titolo per l'applicazione */}
        <h1 style={{ color: 'white', fontSize: '24px', cursor: 'pointer' }} onClick={() => setArgument('')}>Appunti di programmazione</h1>
        <ul className={"navbar-nav " + styles.menu} style={{ flexDirection: 'row' }}>
          <li className="nav-item" onClick={() => setArgument('esercizi')}><a className="nav-link" href="#">Esercizi</a></li>
          <li className="nav-item" onClick={() => setArgument('javascript')}><a className="nav-link" href="#">Javascript</a></li>
          <li className="nav-item" onClick={() => setArgument('react')}><a className="nav-link" href="#">React</a></li>
        </ul>
      </nav>
      <div className="row">
        { argument !== ''
          ? (<>
            <div className={"col-2 p-0 border-right " + styles.sidebar}>
              <div className="list-group list-group-flush border-bottom">
                { argumentsList.map((argument, i) => <MasterDetailSideBarTab
                  onClick={() => handleClick(i)}
                  tabText={argument.title}
                  key={i}
                />)}
              </div>
            </div>
            <MasterDetailPage title={argumentsList[tabIndex].title}>
              {argumentsList[tabIndex].component}
            </MasterDetailPage>
          </>)
          : (<div>
              {/* <ul style={{ flexDirection: 'row' }}>
                <li onClick={() => setArgument('esercizi')}><a href="#">Esercizi</a></li>
                <li onClick={() => setArgument('javascript')}><a href="#">Javascript</a></li>
                <li onClick={() => setArgument('react')}><a href="#">React</a></li>
              </ul> */}
            </div>)
        }
      </div>
    </div>
  );
}
export default Sommario;