import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import  { connect }  from 'react-redux';
import { startAddExpense } from '../actions/expenses';


const AddExpensePage = (props) => {
    return ( 
        <div>
            <div className="page-header">
                <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                </div>
            </div>

             {/* Passing down onSubmit as a props down to ExpenseForm */}
            <div className="content-container">
                <ExpenseForm 
                        onSubmit={(expense) => {
                            props.dispatch(startAddExpense(expense))
                            //redirecting Url to HomePage
                            props.history.push('/')
                        }}
                    />
            </div>
        </div>
     );
}

export default connect()(AddExpensePage);