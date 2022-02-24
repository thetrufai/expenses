import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Cart from "./Cart";

const ExpenseItem = (props) => {
    return (
        <div>
        <h2>EXPENSE</h2>
         <Cart className="expense-item">
            <ExpenseDate date = {props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
          </Cart>
        </div>



    );
};

export default ExpenseItem;
