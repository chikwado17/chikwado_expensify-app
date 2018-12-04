import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

const NotFoundPage = () => {
    return (  

        <div>
            <h1>404! <NavLink exact={true} to="/">Go Homepage</NavLink></h1>
        </div> 
    );
}
export default NotFoundPage;