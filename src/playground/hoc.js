import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => {
    return ( 
        <div>
            <h1>Info</h1>
            <p>My info is: {props.info}</p>
        </div>
     );
}
 

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Please this is a private info. Please don't Share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}


const AdminWarning = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated  ?  <WrappedComponent {...props}/> : <h1>Please Login to see the details</h1>  }
        </div>
    );
}

const AdminAuth = requireAuthentication(Info);


// ReactDOM.render(<AdminWarning isAdmin={true} info="These are my details"/>,document.getElementById('app'));
ReactDOM.render(<AdminAuth  isAuthenticated={true} info="These are my details"/>,document.getElementById('app'));