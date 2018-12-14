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
        case 'SET_EXPENSES':
            return action.expenses
        default:
            return state;
    }
}
//End of expenseReducer

export default expensesReducer;