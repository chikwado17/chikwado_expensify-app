import moment from 'moment';
import filtersReducers from '../../reducers/filters';


test("should set up filters reducers default value", () => {

    const state = filtersReducers(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
});

test("should setup sortBy amount filter reducer", () => {
    const state = filtersReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test("should setup sortBy date", () => {
   
    const currentState = {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'

    }

    const action  = {
        type: 'SORT_BY_DATE'
    }
    const state = filtersReducers(currentState,action);
    expect(state.sortBy).toBe('date');
});



test("should setup text filter",() =>{
    const text = 'this is my text';

    const action  = {
        type: 'SET_TEXT_FILTER',
        text
    }

    const state = filtersReducers(undefined,action);
    expect(state.text).toEqual(text);

});

test("should setup startDate",() => {

    const startDate = moment();

    const action  = {
        type: 'SET_START_DATE',
        startDate
    }

    const state = filtersReducers(undefined,action);
    expect(state.startDate).toEqual(startDate)
});

test("should setup endDate",() => {

    const endDate = moment();

    const action  = {
        type: 'SET_END_DATE',
        endDate
    }

    const state = filtersReducers(undefined,action);
    expect(state.endDate).toEqual(endDate)
});