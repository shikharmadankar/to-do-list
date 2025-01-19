import React from 'react'
import './Login.css'
import {useState} from 'react'


const Login = () => {

    const [ signState , setSignState] = useState("Sign in")



  return (
    <div>
      <div className="login">
        <h1> {signState }</h1>
        <form action="">
            <input type="email" placeholder='Enter Email' />
            {
                signState==="login"?
            <input type="text" placeholder='Enter Username' />:<></>
            }
            <input type="password" placeholder='Password' />
            <button> {signState} </button>
        </form>

        <div className="switch">
            {signState==="Sign in" ?
            <p>New to manegeral ?<span onClick={()=> {setSignState("login")}}>Log in </span> </p>:
           <p> Already have account ? <span onClick={()=> {setSignState("Sign in")}}>Sign in </span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
