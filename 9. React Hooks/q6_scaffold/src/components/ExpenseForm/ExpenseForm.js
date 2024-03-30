import React, { useEffect, useRef, useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense,updateExpense, editing, selectedExpense }) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();
  const [btnText, setBtnText] = useState("Add Transation");
  const [head, setHead]= useState("Add new transaction");

  // Use the useEffect hook here, to check if an expense is to be updated

  useEffect(() => {
    if (editing && selectedExpense) {
      if(selectedExpense){
        expenseAmountInput.current.value=selectedExpense.amount;
        expenseTextInput.current.value=selectedExpense.text;
        setBtnText("Update Transaction")
        setHead("Update Transaction");
      }
    }
  }, [editing, selectedExpense]);
  // If yes, the autofill the form values with the text and amount of the expense

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const expenseText = expenseTextInput.current.value;
      const expenseAmount = expenseAmountInput.current.value;
      if (parseInt(expenseAmount) === 0) {
        return;
      }
      const expense = {
        text: expenseText,
        amount: expenseAmount,
        id: new Date().getTime()
      };
    if(editing){
      updateExpense(expense);
      setBtnText("Add Transaction");
      setHead("Add new transaction")
    }
    else{
      addExpense(expense);
    }

    
    clearInput();

    return;

    // Logic to update expense here
  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      {/* Change text to Edit Transaction if an expense is to be updated */}
      <h3></h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {btnText}
      </button>
    </form>
  );
};

export default ExpenseForm;
