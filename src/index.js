import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import cofigureStore from './store/configureStore';
import { addExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.sass';

const store = cofigureStore();
const unsubscribe = store.subscribe(() => {
    // console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: -43242 }));
store.dispatch(addExpense({ description: 'Rent', amount: 14500, createdAt: 24920 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000, amount: 59023 }));
// store.dispatch(removeExpense(waterBill.expense));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(
    jsx,
    document.getElementById('root')
);