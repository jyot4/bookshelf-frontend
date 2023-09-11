import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./LoginForm.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios"



function LoginForm() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  console.log(localStorage.getItem("tokenid"))
  function handleLogin(e) {
    e.preventDefault()
    axios.post("https://servers-z693.onrender.com/login", { username, password })
      .then((result) => {
        if (result.status === 200) {
          console.log(result.data)
          localStorage.setItem("tokenid", result.data)
          navigate("/home")

        } else {
          console.log("dya kuch to gadbad hai")
        }
      })


  }



  return (
    <>
      < div className='login'>
        <div className='loginContent'>
          <h1>Login</h1>

          <form method='post' onSubmit={handleLogin}>
            <label>Username </label>
            <input type="text" name='username'
              value={username} onChange={e => { setUsername(e.target.value) }}
              placeholder='Username'></input><br />
            <label>Password </label>

            <input type="password" name='password'
              value={password}
              onChange={e => { setPassword(e.target.value) }}
              placeholder='Password'></input><br />
            <button type='submit' name='login'>Login</button>
          </form>
          {/* <Link to="/register">Create account </Link>    */}
          <div>  Don't have account ?<Link to="/register" className='a'>Signup</Link> </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm