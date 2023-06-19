import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, SetenteredTitle] = useState("");
  const [enteredAmount, SetenteredAmount] = useState("");
  const [enteredDate, SetenteredDate] = useState("");

  const titleChangeHandler = (event) => {
    SetenteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    SetenteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    SetenteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    //event.preventdefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(expenseData);
    SetenteredTitle('');
    SetenteredAmount('');
    SetenteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            value={enteredDate}
            min='1-1-2019'
            max='31-12-2022'
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
