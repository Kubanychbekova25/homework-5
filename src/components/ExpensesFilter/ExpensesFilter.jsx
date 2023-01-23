import "../ExpensesFilter/expensesFilter.css";

export const ExpensesFilter = ({ value, onChange }) => {
  return (
    <div className="expenses-filter">
       <label className="label-filter" htmlFor="">Filter by year</label>
      <div className="expenses-filter-control">
       
        <select value={value} onChange={onChange}>
          <option value="2023">2023 </option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
