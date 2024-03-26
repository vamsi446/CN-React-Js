import "./App.css";
import React from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm"
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import { useState } from "react";

export default function App() {
  // Create state for the expenses here
  const [expenses, setExpenses] = useState([]);
  function addClick(e){
    e.preventDefault();
    
  }


    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          {/* Render expense form here */}
          <ExpenseForm addExpense={addClick}/>
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} />
        </div>
        </div>
      </>
    );

}
