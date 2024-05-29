import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const initialState = {
  walletBalance: 5000,
  totalExpense: 0,
  expenseType: [
    { name: "Entertainment", value: 0 },
    { name: "Food", value: 0 },
    { name: "Travel", value: 0 },
  ],
  recentTransactions: [
    // {
    //   item: "Samosa",
    //   date: new Date(),
    //   amount: 150,
    //   type: "food",
    // },
    // {
    //   item: "Movie",
    //   date: new Date(),
    //   amount: 300,
    //   type: "entertainment",
    // },
    // {
    //   item: "Auto",
    //   date: new Date(),
    //   amount: 50,
    //   type: "travel",
    // },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "income/add":
      return { ...state, walletBalance: state.walletBalance + action.payload };
    case "expense/add":
      const { item, date, amount, type } = action.payload;
      const dateCheck = new Date(date);
      console.log(dateCheck);
      return {
        ...state,
        recentTransactions: [
          ...state.recentTransactions,
          {
            item: item,
            date: new Date(date),
            amount: Number(amount),
            type: type,
          },
        ],
        totalExpense: state.totalExpense + Number(amount),
        walletBalance: state.walletBalance - Number(amount),
      };
    default:
      throw new Error("action type unknown!");
  }
}

function DataProvider({ children }) {
  const [
    { walletBalance, totalExpense, expenseType, recentTransactions },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider
      value={{
        walletBalance,
        totalExpense,
        expenseType,
        recentTransactions,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("Data context used outside the DataProvider");
  }
  return context;
}

export { useData, DataProvider };
