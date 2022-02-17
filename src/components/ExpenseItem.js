import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = () => {

    const expenseDate = new Date("2022,02,17");
    const expenseTitle = "Car Insurence";
    const expenseAmount = 249.99;

    return (
        <div>
            <h2>EXPENSE</h2>
        <div className="expense-item">
          <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">$249.67</div>
            </div>
          </div>
        </div>


    );
};

export default ExpenseItem;
