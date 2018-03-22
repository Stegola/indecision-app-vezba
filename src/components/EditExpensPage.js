import React from 'react';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const EditExpensPage = (props) => {
    const handleRemoveButton = () => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
    };
    return (
        <div>
            <h2>Edit</h2>
            <ExpenseForm 
                submitBtn='Update Expense'
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log(props);
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')
                }}
            />
            <button onClick={handleRemoveButton}>Remove</button>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensPage);