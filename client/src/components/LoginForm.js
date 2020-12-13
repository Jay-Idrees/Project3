import React, {useRef} from "react";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginForm=()=>{

        const emailRef=useRef();
        const passwordRef=useRef();

        const [_, dispatch] = useGlobalContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Capture user input from the form f
        const creds = {
            
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        console.log(creds)
        // Verify and log the user in
        // Of every thing you received back from the axios post request, destructure data
        // Note that as the email and password are captured, the JWT package will add token to it
        const { data } = await axios.post("/auth/login", creds);
        // Put the e-mail and token in a state
        // This is done by first destructuring email and token from data
        const { email, token }= data;
        const apiToken = token;
        console.log(apiToken)
        dispatch ({
            type:"LOGIN", 
            email, 
            apiToken: data.token });

        }
// This portion of the loginForm function is written first
    
        return (

                <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  ref={passwordRef} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>






            // <form onSubmit={handleSubmit}>
            //   <input type="text" placeholder="email" ref={emailRef} />
            //   <input type="password" placeholder="password"  ref={passwordRef} />
            //   <button type="submit">Login</button>
            // </form>
          ) 
    
}

export default LoginForm;


