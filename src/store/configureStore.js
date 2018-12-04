import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';



export default () => {
    //creating a store and pass our reducer
//adding a combineReducers to our createStore
const store = createStore(
    //combineReducer is a function object that reference our default state objects to its reducers
combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer

}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
    return store;
}