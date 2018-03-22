import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => {
    console.log(moment(createdAt).format("MMM Do YYYY"));
    return (
        <div>
            <h4>Description: {description}</h4>
            <p>Amount: {amount} | Created at: { moment(createdAt).format("MMM Do YYYY") }</p>
            <button><Link to={`edit/${ id }`}>Edit Expense</Link></button>
            <hr />
        </div>
    );
};

export default ExpenseListItem;