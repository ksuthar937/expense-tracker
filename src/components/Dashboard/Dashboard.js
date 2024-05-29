import React from "react";

import classes from "./Dashboard.module.css";
import Card from "../Card/Card";
import Chart from "../Chart/Chart";
import { useData } from "../../context/DataContext";

/** 
const Data = [
  { name: "Entertainment", value: 60 },
  { name: "Food", value: 30 },
  { name: "Travel", value: 10 },
];
*/

const Dashboard = () => {
  const { walletBalance, totalExpense, expenseType } = useData();

  const handleAddIncome = () => {};

  return (
    <>
      <h1 className={classes.heading}>Expense Tracker</h1>
      <div className={classes.outer}>
        <Card type="wallet" amount={walletBalance} />
        <Card type="expense" amount={totalExpense} />
        <Chart data={expenseType} />
      </div>
    </>
  );
};

export default Dashboard;
