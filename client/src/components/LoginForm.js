import React from "react"


const LoginForm=()=>{

    const handleSubmit = async (e) => {
        e.preventDefault();

        }

    
        return (
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="email"  />
              <input type="password" placeholder="password"/>
              <button type="submit">Login</button>
            </form>
          ) 
    
}

export default LoginForm;

// ref={emailRef}
// ref={passwordRef} 