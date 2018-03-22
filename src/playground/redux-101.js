import { createStore } from 'redux';

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});
store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
store.dispatch({
    type: 'SET',
    count: 101
});

