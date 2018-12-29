import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom';


//destructuring the object props
export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {

    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';   

    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return( 
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing  <span>{expenseCount}</span> {expenseWord} totalling  <span>{formattedExpenseTotal}</span> </h1>
                <div className="page-header__actions"> 
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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