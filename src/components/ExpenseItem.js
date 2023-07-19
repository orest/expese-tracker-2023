const ExpenseItem = (props) => {
  const cost = 35.0;

  const formatNumber = (number) => {
    if (!isNaN(number)) return Number(number).toFixed(2);
  };

  return (
    <div className="row">
      <div className="col-2 p-1 border-bottom">{props.date}</div>
      <div className="col-6 p-1 border-bottom"> {props.title} </div>
      <div className="col-2 p-1 border-bottom">{props.category}</div>
      <div className="col-2 p-1 border-bottom">{formatNumber(props.cost)}</div>
    </div>
  );
};

export default ExpenseItem;
