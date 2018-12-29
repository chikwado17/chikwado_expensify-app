import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';



export const LoginPage = ( props ) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__titile">Expensify</h1>
                <p>It's time to get your expenses under control</p>
            <button className="box-button" onClick={props.startLogin}>Login with Google</button>
            </div>
        </div>
    );
}





const mapDispatchToProps = (dispatch) => ({

      //adding a function to dispatch startLogin component as a method
      startLogin: () => dispatch(startLogin())
  
});
 
export default connect(undefined, mapDispatchToProps)(LoginPage);