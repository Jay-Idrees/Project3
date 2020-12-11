
// Inserting a hook - We want to load this whenever we want to load this page
//useEffect is for loading
import React, {useEffect, useReducer} from "react"
import logo from './logo.svg';
import './App.css';
// Can later move it out to api.js later
import axios from "axios";
import LoginForm from "./components/LoginForm"
import { useGlobalContext } from "./context/GlobalContext";
import AuthenticatedApp from './components/AuthenticatedApp'
import UnauthenticatedApp from "./components/UnauthenticatedApp"
function App() {
// Making a state as we have to update the message
// useReducer is another hook like useeffect- typically used when there is complex state logic that involves multiple sub-values or when a new state depends on the previous one
  const [state, dispatch]= useGlobalContext()


  // useEffect hook--------------------------
useEffect(() => {
  // Creating a load message function
loadMessage();
}, [state.apiToken]) // cl br useEffect
//---------------------------------------------

const loadMessage = ()=>{
  axios.get("/api/welcome").then(({ data })=>{
    // destructuring message from data
    const { message } = data;
    dispatch({type:"GET_MESSAGE", message})
  })
} //br cl loadMessage


  return (
    <div className="App">
          {state.apiToken ?  <AuthenticatedApp />:  <UnauthenticatedApp />}
     
        

    </div>
  );
}

export default App;
