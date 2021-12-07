import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addExpense }) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      id: "e" + Math.random().toString(2),
      ...enteredExpenseData,
    };
    addExpense(newExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
