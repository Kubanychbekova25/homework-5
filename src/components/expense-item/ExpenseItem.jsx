import "../expense-item/expenseItem.css";

export const ExpenseItem = ({ title, date, price }) => {
  console.log(title);
  return (
    <div className="expense-item ">
      <div className="expense-date">
        <p className="date">{date.toString()}</p>
      </div>

      <span className="title">{title}</span>
      <div className="price">
        <p>{"som" + price + ",00"}</p>
      </div>
    </div>
  );
};
