import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../routers/NotFoundPage';
import Header from '../routers/Header';


class AppRouter extends Component {

    render() { 
        return ( 
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                        <Route path="/create" component={AddExpensePage}/>
                        <Route path="/edit/:id" component={EditExpensePage}/>
                        <Route path="/help" component={HelpPage}/>
                        <Route component={NotFoundPage}/>
                    </Switch> 
                </div>
            </BrowserRouter>
         );
    }
}
 
export default AppRouter;



