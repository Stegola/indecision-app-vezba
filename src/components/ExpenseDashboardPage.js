import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFiters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFiters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;