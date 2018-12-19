import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

//destructuring the props from AppRouter->PrivateRouter, getting the properties like path, exact etc using ...rest
export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
    }) => ( 
        //checking if user is authenticated, then show the private page else then redirect if not, to a public page.
            <Route {...rest} component={(props) => (
                isAuthenticated ? (
                    <Redirect to="/dashboard"/>
                ) : (
                    <Component {...props} />
                )
        )}/>
     );

 

const mapStateToProps = (state) => ({
    //auth coming from store ->
    isAuthenticated: !!state.auth.uid
});


export default connect(mapStateToProps)(PublicRoute);