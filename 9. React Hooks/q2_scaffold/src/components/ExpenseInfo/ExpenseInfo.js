import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  // Add logic here to calculate the grand total, profit and expense amount here
  const { expenses } = props;
  const { total, income, loss } = expenses.reduce(
    (accumulator, expense) => {
      const { amount } = expense;
      if (amount > 0) {
        accumulator.income += amount;
      } else if (amount < 0) {
        accumulator.loss += amount;
      }
      accumulator.total += amount;
      return accumulator;
    },
    { total: 0, income: 0, loss: 0 }
  );

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${/* Grand total should be displayed here */total}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${/*Total Profit Amount should be displayed here */income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${/* Total expense amount should be displayed here */loss}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
