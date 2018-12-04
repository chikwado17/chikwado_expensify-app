import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';




const Header = () => {
    return ( 
       <div>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br/>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br/>
            <NavLink to="/help" activeClassName="is-active">Help Page</NavLink><br/>
       </div>
     );
}

export default Header;