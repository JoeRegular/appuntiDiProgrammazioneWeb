import React from "react";
import styles from "./dettaglioPagina.module.css";

const MasterDetailPage = (props) => {
  return (
    <div>
      <div className={styles.heading}>
        <h3>{props.title}</h3>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default MasterDetailPage;