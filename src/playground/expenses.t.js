// import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


// //test function receives two arguments one is the name of the test and the 
// //other one is a method to pass an action object
// test('should i setup remove expense action object', () =>{

//     const action = removeExpense({id: '123abc'});
//         expect(action).toEqual({
            
//             type: 'REMOVE_EXPENSE',
//             id:'123abc'
//         });
// });

// test('should i setup edit expense action object', () => {
//     const action = editExpense('123abc',{note:'a new note'});

//     expect(action).toEqual({
//         type:'EDIT_EXPENSE',
//         id:'123abc',
//         updates: {
//             note: 'a new note'
//         }
//     }); 
// });

// test('should setup add expense action object with provided data', () => {
//     const expenseData = {
//         description:'Rent',
//         amount:109500,
//         createdAt:1000,
//         note:'This is last month rent'
//     }

//     const action = addExpense(expenseData);
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id:expect.any(String)
//         }
//     })
// });

// test('should i setup add expense action object with default values', () => {
  
//     const action = addExpense();

//     expect(action).toEqual({
        
//         type: 'ADD_EXPENSE',

//       expense:{
    
//         id:expect.any(String),
//         description:'',
//         amount:0,
//         createdAt:0,
//         note:''
//       }
//     })
// })