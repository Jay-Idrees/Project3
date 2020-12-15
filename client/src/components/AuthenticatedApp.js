import React from "react";
import Proposal from "./Proposal/Proposal"
import Headbar from "./Headbar/Headbar";

function AuthenticatedApp() {
    return (
      <div>
      <Headbar />
       <Proposal/>
     
      </div>
    );
  }
  
  export default AuthenticatedApp;
  