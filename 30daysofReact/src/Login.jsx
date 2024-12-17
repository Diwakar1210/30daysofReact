import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {

  let {userName} = useParams();
  let navigate = useNavigate();

  function handleNavigation(){
    navigate("/");
  }
  
  return (
    <>
        <h1>Login - {userName}</h1>
        <button onClick={handleNavigation}>Move to Home</button>
    </>
  )
}

export default Login