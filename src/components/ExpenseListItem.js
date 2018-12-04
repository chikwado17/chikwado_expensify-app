import React, { Component } from 'react';
import { Link } from 'react-router-dom';


                            //destructing ID and Dispatch as a props
const ExpenseListItem = ({ id, description,amount,createdAt}) => {
    return ( 
        <div>
            {/* Redirecting the links to edit page with the props ID*/}
           <Link to={`/edit/${id}`}>
                 <h3>{description}</h3>
           </Link>
           <p>{amount} - {createdAt}</p>
        </div>
     );
}

export default ExpenseListItem;