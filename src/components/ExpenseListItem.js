import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => {
    console.log(moment(createdAt).format("MMM Do YYYY"));
    return (
        <div>
            <h4>Description: {description}</h4>
            <p>Amount: {numeral(amount / 100).format('$0,0.00')} | Created at: { moment(createdAt).format("MMM Do YYYY") }</p>
            <button><Link to={`edit/${ id }`}>Edit Expense</Link></button>
            <hr />
        </div>
    );
};

export default ExpenseListItem;