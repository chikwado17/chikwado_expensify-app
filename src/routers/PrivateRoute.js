import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

//destructuring the props from AppRouter->PrivateRouter, getting the properties like path, exact etc using ...rest
export const PrivateRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
    }) => ( 
        //checking if user is authenticated, then show the private page else then redirect if not, to a public page.
            <Route {...rest} component={(props) => (
                isAuthenticated ? (
                    <div>
                        <Header />
                        <Component {...props} />
                    </div>
                    
                ) : (
                    
                  <Redirect to="/"/>
                )
        )}/>
     );

 

const mapStateToProps = (state) => ({
    //auth coming from store ->
    isAuthenticated: !!state.auth.uid
});


export default connect(mapStateToProps)(PrivateRoute);