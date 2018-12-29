import database from '../firebase/firebase';


//creating action generator for addExpense
                                //creating default object for expenses then pass it to expenses object                        
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

//action dispatch of firebasre to redux 
export const startAddExpense = (expenseData = {}) => {
   
    return (dispatch, getState) => {
        //setting data for each logged in user differently
        const uid = getState().auth.uid;

        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;


        //setting data for each logged in user differently
        database.ref(`users/${uid}/expenses`).push({ description,note,amount,createdAt }).then((ref)=>{
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });

//removing all data from firebase using function generator to remove expense

  
export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
        dispatch(removeExpense({ id }));
        });
    };
};





//action generator for editExpense
export const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});
//end of expenses reducer


//updating data from database with function generator
export const startEditExpense = (id,updates) => {

   return (dispatch, getState) => {
    const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id,updates));
    });
   }
}






//setup for firebase to fetch save data from database

//set_Expenses action generator
export const setExpenses = (expenses) => ({
    type:'SET_EXPENSES',
    expenses
});


//dispatching function for setExpenses for firebase database, that will fetch users data from 
//firebase, save it, and can not clean even when refreshed-> and this is to be dispatched on app.js
//m reminder
                        
export const startSetExpenses = () => {
                         //setting data for each logged in user differently
    return (dispatch, getState) => {
        const uid = getState().auth.uid
                                     //setting data for each logged in user differently
       return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {

            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id:childSnapshot.key,
                        ...childSnapshot.val()
                    });
            });

            dispatch(setExpenses(expenses));
        });
    }
}

