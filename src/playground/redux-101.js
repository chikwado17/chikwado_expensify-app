import { createStore } from "redux";



//creating action generator for my incrementCount
                            //this object means if there is a number for incrementBy use it if there is not then use 1 as default
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

// action generator for decresing count by 10
                              //this object means if there is a number for incrementBy use it if there is not then use 1 as default
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

///my COunt Reducer

const countReducer = (state = {count:0}, action)=> {

    switch(action.type){

        case 'INCREMENT':
           
            return{
                count: state.count + action.incrementBy
            }
            //
        case 'RESET':
            return{
                count: 0
            }
            //
        case 'DECREMENT':
           
            return{
                count:state.count - action.decrementBy
            }
            //
            case 'SET':
                return{
                    count:action.count
                }
    }
    return state;
}

//Passing my countReducer to the createStore function
const store = createStore(countReducer);

store.subscribe(() =>{
    console.log(store.getState());
});


//passing incrementBy inside incrementCount function as an object
store.dispatch(incrementCount({
    incrementBy:5
}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

//passing decrementBY inside incrementCount function as an object
store.dispatch(decrementCount({
    decrementBy:10
}));

store.dispatch(setCount({
    count:101
}));


