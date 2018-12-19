import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';



export const LoginPage = ( props ) => {
    return (
        <div>
            <button onClick={props.startLogin}>Login</button>
        </div>
    );
}





const mapDispatchToProps = (dispatch) => ({

      //adding a function to dispatch startLogin component as a method
      startLogin: () => dispatch(startLogin())
  
});
 
export default connect(undefined, mapDispatchToProps)(LoginPage);