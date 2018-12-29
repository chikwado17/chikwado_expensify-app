import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = (props) => {
    return ( 
       <div>
            <Link to="/dashboard">
                <h1>Expensify</h1>
            </Link>
           
            <button onClick={props.startLogout}>Logout</button>
       </div>
     );
}

const mapDispatchToProps = (dispatch) => ({

  startLogout: () => dispatch(startLogout())
});


export default connect(undefined,mapDispatchToProps)(Header);