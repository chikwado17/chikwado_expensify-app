import React, { Component } from 'react';




class LoadingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="loader">
                <img className="loader__image" src="/images/loader.gif"/>
            </div>
         );
    }
}
 
export default LoadingPage;