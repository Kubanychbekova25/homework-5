

export const ExpenseItem = ({ title, date, price }) => {
  console.log(title);
  return (
    <div className="p-title">
      <p>{date.toString()}</p>
      <p>{title}</p>
      <p>{"$" + price + ",00"}</p>
    </div>
  );
};
