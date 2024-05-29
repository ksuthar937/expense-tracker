import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const initialState = {
  walletBalance: 4500,
  totalExpense: 500,
  expenseType: [
    { name: "Entertainment", value: 60 },
    { name: "Food", value: 30 },
    { name: "Travel", value: 10 },
  ],
  recentTransactions: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "income/add":
      return { ...state, walletBalance: state.walletBalance + action.payload };

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
