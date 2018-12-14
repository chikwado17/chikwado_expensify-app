import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    //creating a store and pass our reducer
//adding a combineReducers to our createStore
const store = createStore(
    //combineReducer is a function object that reference our default state objects to its reducers
combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer

}),
    composeEnhancer(applyMiddleware(thunk))
);
    return store;
}