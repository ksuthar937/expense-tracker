import React from "react";
import classes from "./Transactions.module.css";
import TransactionItem from "../TransactionItem/TransactionItem";
import { useData } from "../../context/DataContext";

/** 
const Data = [
  {
    item: "Samosa",
    date: new Date(),
    amount: 150,
    type: "food",
  },
  {
    item: "Movie",
    date: new Date(),
    amount: 300,
    type: "entertainment",
  },
  {
    item: "Auto",
    date: new Date(),
    amount: 50,
    type: "travel",
  },
];
*/

const Transactions = () => {
  const { recentTransactions } = useData();
  return (
    <div className={classes.summaryItem1}>
      <h1 className={classes.heading}>Recent Transactions</h1>
      <div className={classes.outer}>
        {recentTransactions.map((item, index) => (
          <TransactionItem
            key={index}
            name={item.item}
            date={item.date}
            amount={item.amount}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
