import React from "react";
import styles from "./masterdetail.module.css";

const MasterDetailPage = (props) => {
  return (
    <div className="col">
      <div className={"row " + styles.heading}>
        <div className="col">
          <h3 className="ml-3 mb-4">{props.title}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-5">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default MasterDetailPage;