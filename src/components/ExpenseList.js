 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import ExpenseListItem from './ExpenseListItem';
 import getVisibleExpenses from '../selectors/expenses'; 

 export const ExpenseList = (props) => {
     return ( 
         <div>
            {
                props.expenses.length === 0 ? 
                (<p>No Expenses</p>) : 
                (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
            }
         </div>
      )
 }



//HOC 
 const mapStateToProps = (state) => {
     return {
        expenses:getVisibleExpenses(state.expenses,state.filters)
     }
 }
 export default connect(mapStateToProps)(ExpenseList);
 //End of HOC