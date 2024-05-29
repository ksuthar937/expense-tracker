import Dashboard from "./components/Dashboard/Dashboard";
import TopExpenses from "./components/TopExpenses/TopExpenses";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <>
      <Dashboard />
      <div className="summary">
        <Transactions />
        <TopExpenses />
      </div>
    </>
  );
}

export default App;
