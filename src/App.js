import React, {useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DummyExpenses = [
  { id:'e1', title: 'car insuarance', amount: 3000, date: new Date(2021, 6, 22) },
  { id:'e2', title: 'Laptop Repair', amount: 1200, date: new Date(2021, 5, 19) },
  { id:'e3', title: 'Room rent', amount: 5000, date: new Date(2021, 2, 6) },
  { id:'e4', title: 'Electricity bill', amount: 200, date: new Date(2021, 6, 11) },

];

const App = () =>{
 const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}/>
</div>
  );
}

export default App;