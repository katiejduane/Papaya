import React from "react";
import { Link } from "react-router-dom";

import styles from "./MiniCard.module.css";
import Button from "../../UI/Button/Button";

const miniCard = props => {
  const miniStatusColor = {
    backgroundColor: props.color
  };

  // const projectType = props.type;
  // const projectStatus = props.status;

  return (
    <div className={styles.MiniCard}>
      <h3 className={styles.MiniCardTitle}>{props.title}</h3>
      <div className={styles.MiniCardType}>{props.type}</div>
      <div className={styles.MiniCardStatus} style={miniStatusColor}>
        {props.status}
      </div>
      <Button btnClass="MiniCardBtn">
        <Link to={`/view/${props.view}`}>View</Link>
      </Button>
    </div>
  );
};

export default miniCard;
