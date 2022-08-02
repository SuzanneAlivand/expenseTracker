import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
    </ul>
  );
};

export default ExpenseList;
