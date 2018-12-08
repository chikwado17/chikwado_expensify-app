import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseTotal from '../selectors/expenses-total';



//destructuring the object props
export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {

    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';   

    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return( 
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal} </h1>
        </div>
    );
}

// const mapStateToProps = (state) => {

//     const visibilityExpense = getVisibleExpenses(state.expenses, state.filters);

//     return {
//         //getting the total count of visible expenses
//         expenseCount: visibilityExpense.length,
//         //getting the total visible expense
//         expenseTotal: ExpenseTotal(visibilityExpense)
//     };
// };
 
const mapStateToProps = (state) => {
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpense.length,
        expensesTotal: ExpenseTotal(visibleExpense)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);