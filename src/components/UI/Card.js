const Card = (props) => {
  let headerCssClass = "card-header";
  if (props.color) {
    headerCssClass = `${headerCssClass} bg-${props.color}`;
  }

  if (props.textColor && props.textColor == "light") {
    headerCssClass = `${headerCssClass} text-white`;
  }

  let cardClass = "card ";
  if (props.wrapperClass) {
    cardClass +=  props.wrapperClass;
  }

  return (
    <div className={cardClass}>
      <div className={headerCssClass}>{props.title}</div>
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
