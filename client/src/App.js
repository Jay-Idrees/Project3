
// Inserting a hook - We want to load this whenever we want to load this page
import React, {useEffect, useReducer} from "react"
import logo from './logo.svg';
import './App.css';
// Can later move it out to api.js later
import axios from "axios";
import LoginForm from "./components/LoginForm"

function App() {
// Making a state as we have to update the message
// useReducer is another hook like useeffect- typically used when there is complex state logic that involves multiple sub-values or when a new state depends on the previous one
  const [state, dispatch]= useReducer((state, action)=>{
    switch(action.type){
      case "GET_MESSAGE":
        return {
          ...state, 
          message:action.message

        }// cl br return
        default:
          return state;
    }
  }, {message: undefined}) // br close reducer. This step is setting up the message


  // useEffect hook--------------------------
useEffect(()=>{
  // Creating a load message function
loadMessage();
}, []) // cl br useEffect
//---------------------------------------------

const loadMessage=()=>{
  axios.get("/api/welcome").then(({data})=>{
    // destructuring message from data
    const { message} = data;
    dispatch({type:"GET_MESSAGE", message})
  })
} //br cl loadMessage


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          {state.apiToken ? <p>You are logged in </p>: <LoginForm />}
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
