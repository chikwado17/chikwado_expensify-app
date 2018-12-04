import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test("should set the default value", () => {

    const state = expensesReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test("should set a remove state with an ID", () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id:expenses[1].id
    };

    const state = expensesReducers(expenses,action);
    expect(state).toEqual([ expenses[0], expenses[2] ])

});

test("should set remove expense when ID is not found", () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:'-1'
    }

    const state = expensesReducers(expenses,action);
    //returning back the expenses default state
    expect(state).toEqual(expenses);
});

test("should set add an expense", () => {
    const expense = [{
        id:'42',
        description:'abcvvvvv',
        note:'',
        amount:19150,
        createdAt:0
    }]

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducers(expenses,action);
    expect(state).toEqual([...expenses, expense])
        
});

test("should set edit expense with an ID", () => {

    const amount = 123433;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expensesReducers(expenses,action);
    expect(state[1].amount).toBe(amount);
});
test("should don't set edit expense with an ID is not found", () => {

    const amount = 123433;
    const action = {
        type: 'EDIT_EXPENSE',
        id:'-1',
        updates: {
            amount
        }
    };

    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
})