import { ExpenseItem } from "../expense-item/ExpenseItem";
import "../expenses/Expense.css"
import {ExpensesFilter} from "../ExpensesFilter/ExpensesFilter"
import { Chart } from "../Chart/Chart";
import { useState } from "react";


export const Expenses = ({expenses}) => {
  const [selectedYear,setSelectedYear]= useState('2023')


 const yearChangeHandler =(event) =>{
  setSelectedYear(event.target.value) 
   }
  
   const filteredItems =expenses.filter((element)=>{
   
    const  stringifiYear= new Date(element.date).getFullYear().toString()
    return stringifiYear ===selectedYear;
   });
  
  return (
    <ul className="expenses-list">
        <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart items={filteredItems}/>
      {expenses.map((elem) => {
        // console.log(expenses);
        return (
          <ExpenseItem
          key={elem.title +new Date().getTime()}
           title={elem.title} 
           price={elem.price}
            date={elem.date} />
          
        );
      })}
    </ul>
  );
};
