import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [display, setDisplay] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplay(false);
  };

  const displayChangeHandler = () => {
    setDisplay(true);
  };

  const displayCancelHandler = () => {
    setDisplay(false);
  };

  return (
    <div className="new-expense">
      {!display && (
        <button onClick={displayChangeHandler}>Add New Expense</button>
      )}
      {display && (
        <ExpenseForm
          clicked={displayCancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
