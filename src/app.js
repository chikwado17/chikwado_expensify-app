import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import LoadingPage from './components/LoadingPage';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';


const store = configureStore();

const jsx = (
    <div>
        <Provider store={store}>
             <AppRouter/>
        </Provider>
    </div>
);




let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){

        ReactDOM.render( jsx, document.getElementById("app"));
        
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        
        //dispatching login action generator for logged in user by an ID
        store.dispatch(login(user.uid));
        //redirecting a particular user when logged in
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
        
    }else{
        //dispatching logout action generator for logged out users
         store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
