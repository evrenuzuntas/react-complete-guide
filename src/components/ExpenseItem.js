import "./ExpenseItem.css";
import "./ExpenseDate.css";

function ExpenseItem(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div className='expense-date'>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
