import React from "react";
import LoginForm from './LoginForm'
import Headbar from "./Headbar/Headbar";
import Jumbo from "./Jumbo/Jumbo";
import '../App.css';

function UnauthenticatedApp() {
    return (
      <div >
       
    <Headbar />




    <Jumbo />

       <LoginForm />


       <p> UN-Authenticated app</p>

      </div>
    );
  }
  
  export default UnauthenticatedApp;
  