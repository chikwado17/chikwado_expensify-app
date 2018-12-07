import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

                            //destructing ID and Dispatch as a props
const ExpenseListItem = ({ id, description,amount,createdAt}) => {
    return ( 
        <div>
            {/* Redirecting the links to edit page with the props ID*/}
           <Link to={`/edit/${id}`}>
                 <h3>{description}</h3>
           </Link>
           <p>
                {numeral(amount / 100).format('$0,0.00')} 
                -
                {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
        </div>
     );
}

export default ExpenseListItem;