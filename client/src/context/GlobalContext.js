
//In the global context we define what happens with the action
import React, {useReducer, createContext, useContext} from "react"
//A reducer is just a function of state in action
const GlobalContext = createContext();
//Destructuring provider global context
const { Provider } = GlobalContext;

const reducer = (state, action) => {
    switch (action.type) {
      case "GET_MESSAGE":
        return {
          ...state,
          message: action.message
        }
//Once we get the username and token from API then we package it to dispach
      case "LOGIN":
        console.log(action)
        return {
          ...state,
          //call the email object you just got email
          email: action.email,
          apiToken: action.apiToken
        
        }
    //   case "LOGOUT":
    //     console.log(action)
    //     return {
    //       ...state,
    //       email: "",
    //       apiToken: ""
    //     }
      default:
        return state;
    }
  }
// Using props to get the children
const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { 
    message: undefined,
    email: "",
    apiToken: ""
  })

  return <Provider value={[state, dispatch]} {...props} />
}

const useGlobalContext = () => {
  return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext }