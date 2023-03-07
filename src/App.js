import react ,{useState} from 'react'
import './index.css';
import Expense from './components/expense/Expense';
import AddnewExpense from './components/addexpense/AddnewExpense';  
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [oldexpenses, setExpenses] = useState(expenses);
  const savedata = (expenses1) =>{
    setExpenses((prevExpenses) => {
      return [expenses1, ...prevExpenses];
    })
    console.log(oldexpenses)
  }
  return (
    <div>
      <AddnewExpense onsavedata={savedata} ></AddnewExpense>
      <Expense item={oldexpenses}></Expense>
    </div>
  );
}

export default App;
