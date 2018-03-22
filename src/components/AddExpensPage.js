import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';


const AddExpensPage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            submitBtn='Add Expense'
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensPage);