import uuid from 'uuid';



//creating action generator for addExpense
                                //creating default object for expenses then pass it to expenses object                        
export const addExpense = ({description = '',note = '', amount = 0, createdAt = 0} = {}) => ({
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
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//action generator for editExpense
export const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});
//end of expenses reducer