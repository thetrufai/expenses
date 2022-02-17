import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const month = props.date.toLocaleString("en-US", {month:"long"});
    const day = props.date.toLocaleString("en-US", {day:"2-digit"});
    const year = props.date.getFullYear();

    return (
        <div>
            <h2>EXPENSE</h2>
        <div className="expense-item">
          <div className="beauty-date">
              <div className="beauty-date">{month}</div>
              <div className="beauty-date">{day}</div>
              <div className="beauty-date">{year}</div>
          </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
          </div>
        </div>


    );
};

export default ExpenseItem;
