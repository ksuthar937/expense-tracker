import React from "react";
import classes from "./TopExpenses.module.css";
import ExpensesBarChart from "../ExpensesBarChart/ExpensesBarChart";

const TopExpenses = () => {
  const data = [
    { name: "Entertainment", value: 60 },
    { name: "Food", value: 30 },
    { name: "Travel", value: 10 },
  ];
  return (
    <div>
      <h1 className={classes.heading}>Top Expenses</h1>
      <div className={classes.outer}>
        <ExpensesBarChart data={data} />
      </div>
    </div>
  );
};

export default TopExpenses;
