import { ExpenseItem } from "../expense-item/ExpenseItem";
import "../expenses/Expense.css"

export const Expenses = ({expenses}) => {
    // console.log(expenses);
  return (
    <ul className="expenses-list">
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
