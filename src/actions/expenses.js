import database from '../firebase/firebase';


//creating action generator for addExpense
                                //creating default object for expenses then pass it to expenses object                        
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

//action dispatch of firebasre to redux 
export const startAddExpense = (expenseData = {}) => {
   
    return (dispatch) => {

        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;


        database.ref('expenses').push({
            description,
            note,
            amount,
            createdAt

        }).then((ref)=>{
            //dispatching the function generator for database
            dispatch(addExpense({
                id:ref.key,   
                description,
                note,
                amount,
                createdAt
            }));
        });
    };
};









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