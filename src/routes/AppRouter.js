import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensPage from '../components/AddExpensPage';
import EditExpensPage from '../components/EditExpensPage';
import Help from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensPage} />
                <Route path="/edit/:id" component={EditExpensPage} />
                <Route path="/help" component={Help} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

