import Expenses from "./Components/Expenses/Expenses";

const App = () =>{
  const expenses = [
    { title: 'car insuarance', amount: 3000, date: new Date(2021, 6, 22) },
    { title: 'Laptop Repair', amount: 1200, date: new Date(2021, 5, 19) },
    { title: 'Room rent', amount: 5000, date: new Date(2021, 2, 6) },
    { title: 'Electricity bill', amount: 200, date: new Date(2021, 6, 11) },

  ];
  return (
    <Expenses items={expenses}/>

  );
}

export default App;