import Button from "../UI/Button/Button"
import { ExpenseForm } from "../expense-form/Expense-form"
import {useState} from "react"
import "../new-expense/NewExpense.css"

export const NewExpense =({onNewExpenseAdd}) => {
    
const [ showForm, setShowForm ] =useState(false)


// console.log('yyyyyyyyyyyyy',showForm);
const showExpenseForm= () => {
setShowForm((prevState) => {
  
   return !prevState;
   ;
    })
 };

    return (
        <div className="new-expense">

          {showForm ? (
          <ExpenseForm onShowForm={showExpenseForm} onNewExpenseAdd={onNewExpenseAdd}/> 
          ) : ( 
          <Button className="btn1" title ="Добавить новый расход" onClick={showExpenseForm}/>
          )}
           
        </div>
 )
}
