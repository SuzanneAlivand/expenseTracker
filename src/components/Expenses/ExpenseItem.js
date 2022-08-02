import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expense={expense} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">{expense.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
