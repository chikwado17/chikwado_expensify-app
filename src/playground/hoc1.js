import React from 'react';
import reactDOM from 'react-dom';



const Info = (props) => {
    return ( 

        <div>
            <h1>Info</h1>
            <p>This is the info: {props.info}</p>
        </div>
     );
}
 
                            //component that refers to adminInfo that with display the messsage
const withAdminInfo = (WrappedComponent) => {
    //returning a high order component 
        //this is a component a stateless functional component
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private infor. please don't share!</p>}
                              {/* //trying to get the values from the parent component props and pass down to child component props. Here which is info Component */ }
            <WrappedComponent {...props}/>
        </div>
    )

}

//Using arror function to create a function that gets pass High order Component inside
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        //if isAuthenticated is true then show the info component, if is false show the authentication message
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please login to see the details</p>)}
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);

//creating admin info the one to render to the screen which is a component
                                //passing info component to adminInfo then display the adminInfo
const AdminInfo = withAdminInfo(Info)

// reactDOM.render(<AdminInfo isAdmin={true} info="these are the info details"/>,document.getElementById("app"));
reactDOM.render(<AuthInfo isAuthenticated={true} info="these are the info details"/>,document.getElementById("app"));