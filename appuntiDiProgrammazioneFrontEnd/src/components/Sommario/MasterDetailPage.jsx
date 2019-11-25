import React from "react";
import styles from "./masterdetail.module.css";

const MasterDetailPage = (props) => {
  return (
    <div>
      <div className={styles.heading}>
        <div>
          <h3>{props.title}</h3>
        </div>
      </div>
      <div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default MasterDetailPage;