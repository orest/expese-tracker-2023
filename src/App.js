import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense";

function App() {
  console.log(" App Component Loaded");

  

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Orest is a nice guy</h2>

          <Card title="Add New Expense" color="warning">
            <NewExpense />
          </Card>

          <Card title="Expense List" wrapperClass="mt-3" textColor="light" color="primary">
            <div className="container">
              <ExpenseItem date="2/11/2023" title="Tolls" category="Auto" cost="40"></ExpenseItem>
              <ExpenseItem date="2/12/2023" title="Starbucks" category="Food" cost="10.34" />
              <ExpenseItem date="2/14/2023" title="Book about React" category="Education" cost="99.99" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
