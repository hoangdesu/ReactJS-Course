import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Finally learning React yayy</p>
      <ExpenseItem /> {/* preferred */}
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
