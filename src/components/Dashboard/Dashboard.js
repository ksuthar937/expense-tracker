import React from "react";

import classes from "./Dashboard.module.css";
import Card from "../Card/Card";
import Chart from "../Chart/Chart";

const Dashboard = () => {
  const data = [
    { name: "Entertainment", value: 60 },
    { name: "Food", value: 30 },
    { name: "Travel", value: 10 },
  ];
  return (
    <>
      <h1 className={classes.heading}>Expense Tracker</h1>
      <div className={classes.outer}>
        <Card type="wallet" amount={4500} />
        <Card type="expense" amount={500} />
        <Chart data={data} />
      </div>
    </>
  );
};

export default Dashboard;
