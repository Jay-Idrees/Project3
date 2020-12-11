import React from "react";
import LoginForm from './LoginForm'
import Nav from "./Nav"


function UnauthenticatedApp() {
    return (
      <div>
       
    <Nav />

       <LoginForm />


       <p> UN-Authenticated app</p>

      </div>
    );
  }
  
  export default UnauthenticatedApp;
  