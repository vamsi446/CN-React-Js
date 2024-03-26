import React from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";
import { useState } from "react";
export default function Transaction(props){
  const [currentHoverIndex, setHoverIndex] = useState(null);

    return (
      <li
        key={props.expense.id}
        className={`${styles.transaction} ${
          props.expense.amount > 0 ? styles.profit : styles.loss
        }`}
        onMouseOver={() => {
          setHoverIndex(props.index );
        }}
        onMouseLeave={() => {
          setHoverIndex(null);
        }}
      >
        <div>{props.expense.text}</div>
        <div className={styles.transactionOptions}>
          <div
            className={`${styles.amount} ${
              currentHoverIndex === props.index &&
              styles.movePrice
            }`}
          >
            ${props.expense.amount}
          </div>
          <div
            className={`${styles.btnContainer} ${
              currentHoverIndex === props.index && styles.active
            }`}
          >
            <div className={styles.edit} onClick={() => {}}>
              <img src={EditImage} height="100%" alt="Edit" />
            </div>
            <div className={styles.delete} onClick={() => {}}>
              <img src={DeleteImage} height="100%" alt="Delete" />
            </div>
          </div>
        </div>
      </li>
    );
  
}
