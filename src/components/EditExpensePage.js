import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';



const EditExpensePage = (props) => {
    return ( 
        <div>
            <ExpenseForm 
               // {/* passing the expenses down as a props to ExpenseForm component and make an update to the state*/}
                expense={props.expense}

                onSubmit={(expense) => {
                    //the editExpense receives two argument which is props.expense.id -> (the ID of the particular expense to edit) and expense
                   props.dispatch(startEditExpense(props.expense.id,expense));
                   props.history.push('/')
                }}
            />

             <button onClick={() =>
               {
                   //dispatching here is a props and we are removing an expense here by an ID passing it expense ID using props
                   props.dispatch(startRemoveExpense({ id: props.expense.id}));
                   props.history.push('/')
               }}
               >Remove</button>
               
        </div>
     );
}



const mapStateToProps = (state, props) =>{
    return {
        expense:state.expenses.find((expense) => {
            //if expenses ID is equal to edit URL ID then pick the expenses
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);