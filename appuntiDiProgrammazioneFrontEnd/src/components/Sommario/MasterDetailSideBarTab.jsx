import React from 'react';
import styles from "./masterdetail.module.css";

const MasterDetailSideBarTab = (props) => {
  const { tabText, onClick } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      className={styles.sidebarText}
    >
      {tabText}
    </button>
  );
}
export default MasterDetailSideBarTab