import "./App.css";
import {Expenses } from "./components/expenses/Expenses";
import  {ExpenseItem} from "./components/expense-item/ExpenseItem";
import { NewExpense } from "./components/new-expense/NewExpense";
import { useState } from "react"

function App() {
  const [expenses,setExpenses]= useState([
    {
      title: "туалетная бумага",
      price: 300,
      date: new Date(),
    },
    {
      title: "зарядник",
      price: 400,
      date: new Date(),
    },
  ])


  const addNewExpenseHandler =(data)=>{

    const updatedEpenses=[...expenses,data]
    updatedEpenses.push()
    setExpenses(updatedEpenses)
   
  }
  return (
    <div>
      <NewExpense onNewExpenseAdd={addNewExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
