import React from "react";
// import { NavLink } from 'react-router-dom';
import styles from "./NavItem.module.css";

const navItem = (props) => (
  <li
    className={styles.NavItem}
    id={props.id}
    onSubmit={props.submit}
    onClick={props.click}
    onChange={props.change}
  >
    {props.children}
  </li>
);

export default navItem;
