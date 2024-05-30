import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const initialState = {
  walletBalance: 3250,
  totalExpense: 1750,
  expenseType: [
    { name: "entertainment", value: 300 },
    { name: "food", value: 400 },
    { name: "travel", value: 1050 },
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
    {
      item: "Pizza",
      date: new Date(),
      amount: 250,
      type: "food",
    },
    {
      item: "Flight",
      date: new Date(),
      amount: 1000,
      type: "travel",
    },
  ],
  itemsPerPage: 3,
  currentPage: 1,
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
        expenseType: state.expenseType.map((el) =>
          el.name === type ? { ...el, value: el.value + Number(amount) } : el
        ),
      };

    case "transactions/changePage":
      return { ...state, currentPage: action.payload };
    case "transactions/rightPage":
      return { ...state, currentPage: state.currentPage + 1 };
    case "transactions/leftPage":
      return { ...state, currentPage: state.currentPage - 1 };

    default:
      throw new Error("action type unknown!");
  }
}

function DataProvider({ children }) {
  const [
    {
      walletBalance,
      totalExpense,
      expenseType,
      recentTransactions,
      itemsPerPage,
      currentPage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider
      value={{
        walletBalance,
        totalExpense,
        expenseType,
        recentTransactions,
        itemsPerPage,
        currentPage,
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
