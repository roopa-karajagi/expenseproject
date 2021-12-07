import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeHandler = (event) => {
    setInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = {
      title: input.title,
      amount: input.amount,
      date: new Date(input.date),
    };

    console.log("User Input", userInput);

    // setUserOutput(userInput)
    onSaveExpenseData(userInput);
    setInput({
      title: "",
      amount: "",
      date: "",
    });
  };
  // console.log("userOut" , userOutput);
  return (
    <form onSubmit={handleSubmit}>
      <div className=".new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            name="amount"
            value={input.amount}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={input.date}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
