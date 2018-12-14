import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';





const store = configureStore();

const jsx = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
);


const AppRoot = document.getElementById("app");
ReactDOM.render( <p>Loading...</p>, AppRoot);

store.dispatch(startSetExpenses()).then(() => {
    const AppRoot = document.getElementById("app");
    ReactDOM.render( jsx, AppRoot);
});


