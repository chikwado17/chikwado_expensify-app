import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import  { connect }  from 'react-redux';
import { addExpense } from '../actions/expenses';


const AddExpensePage = (props) => {
    return ( 
        <div>
           <h1>Add Expense</h1>
           {/* Passing down onSubmit as a props down to ExpenseForm */}
           <ExpenseForm 
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense))
                    //redirecting Url to HomePage
                    props.history.push('/')
                }}
            />
        </div>
     );
}

export default connect()(AddExpensePage);