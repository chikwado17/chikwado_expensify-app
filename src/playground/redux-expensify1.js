import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';



//creating action generator for addExpense
                                //creating default object for expenses then pass it to expenses object                        
const addExpense = ({description = '',note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//creating action generator for removeExpense
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//action generator for editExpense
const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});
//end of expenses reducer

// creating a default value for expensesReducer state
const expensesReducerDefault = [];
//creating my expenseReducer
const expensesReducer = (state = expensesReducerDefault,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
        //using spread operator to add the current expense value to the old expense value without changing the expense object
            return[
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            //removing the expenseOne object your the id, if the id is equal to the expense
            return state.filter(({id}) =>  id !== action.id);
            //updating the match with is the amount using map function to check through the object
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                    ...expense,
                        //finding the update from action.update which is coming from the exitExpense action generator
                    ...action.updates
                    };
                }else{
                    return expense;
                };
            }); 
        default:
            return state;
    }
}
//End of expenseReducer


//creatin action generator for setTextFilter for filters reducer
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',

});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
//creating a default values for filterReducer
const filtersReducerDefault = {
    text: '',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

//creating my filterReducer
const filtersReducer = (state = filtersReducerDefault,action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            };
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
    }
};
//end of filtersReducer

//creating Get Visible expenses
//filtering the filter object to check match with expense array object
                                            //filters object destructed as the getvisiblity argument
const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) =>{
                                //trying to add filters object to seacrch item that is inside expenses array object
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

        //sorting by date and time using sort method 
    }).sort((a,b) => {

        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        } 

        
    });
}














//creating a store and pass our reducer
//adding a combineReducers to our createStore
const store = createStore(
        //combineReducer is a function object that reference our default state objects to its reducers
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer

    }
));
store.subscribe(() =>{
    //calling the getVisbleExpense

    const state = store.getState();
    const Visible = getVisibleExpenses(state.expenses,state.filters)
    console.log(Visible);
});

//dispatching addExpense
const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount:100,
    createdAt:-21000
}));

//dispatching addExpense
const expenseTwo = store.dispatch(addExpense({
    description: 'Coffe',
    amount:300,
    createdAt:-1000
}));


// store.dispatch(removeExpense({id:expenseOne.expense.id}));

// //updating amount to 500 from the expenseTwo expense grabbing it from the id
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}))

// store.dispatch(setTextFilter('ff'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));




//default state for our expensify-app
const demoState = {
    expenses: [{
        id: 'askjdnkajndjl',
        description: 'January Rent',
        note: 'this is the payment for the address',
        amount: 54500,
        createdAt:0
    }],

    filters:{
        text: 'rent',
        sortBy:'amount', // data or amount
        startDate: undefined,
        endDate: undefined
    }
}