const ExpenseDate = (props) => {
    const month = props.date.toLocaleString("en-US", {month:"long"});
    const day = props.date.toLocaleString("en-US", {day:"2-digit"});
    const year = props.date.getFullYear();

    return (
        <div className="beauty-date">
            <div className="beauty-date">{month}</div>
            <div className="beauty-date">{day}</div>
            <div className="beauty-date">{year}</div>
        </div>
    )
};

export default ExpenseDate;
