import React from "react";
import { PiPizza } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { CiRollingSuitcase } from "react-icons/ci";
import { GoGift } from "react-icons/go";

import classes from "./TransactionItem.module.css";

const TransactionItem = ({ name, date, amount, type }) => {
  let setIcon;
  if (type === "food") {
    setIcon = <PiPizza />;
  } else if (type === "travel") {
    setIcon = <CiRollingSuitcase />;
  } else {
    setIcon = <GoGift />;
  }

  return (
    <>
      <div className={classes.outer}>
        <div className={classes.left}>
          <div className={classes.itemIcon}>{setIcon}</div>
          <div className={classes.item}>
            <p className={classes.name}>{name}</p>
            <p className={classes.date}>{new Date(date).toDateString()}</p>
          </div>
        </div>
        <div className={classes.right}>
          <p className={classes.amount}>&#8377;{amount}</p>
          <div className={classes.cancekIcon}>
            <MdCancel />
          </div>
          <div className={classes.editIcon}>
            <MdModeEdit />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TransactionItem;
