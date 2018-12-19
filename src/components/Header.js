import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';




export const Header = (props) => {
    return ( 
       <div>
            <h1>Expensify</h1>
            <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink><br/>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br/>
            <button onClick={props.startLogout}>Logout</button>
       </div>
     );
}



const mapDispatchToProps = (dispatch) => ({

  startLogout: () => dispatch(startLogout())
});


export default connect(undefined,mapDispatchToProps)(Header);