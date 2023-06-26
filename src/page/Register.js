import React, { useState } from 'react'
import { userRegister } from '../api/userApi'
import Navbar from "../component/Navbar"
const Register = () => {
  const[username,setUsername] = useState("")
  const[email,setEmail]= useState('')
  const[password,setPassword]= useState('')
  const[error, setError] = useState('')
  const[success , setSuccess] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()

    userRegister(username,email,password)
    .then(data=>{
      console.log(data)
      if(data.error)
      {
        setError(data.error)
        setSuccess(false)
      }else if(data.success)
      {
        setSuccess(data.success)
      }
    })
  }
  const showError=()=>
  {
    if(error)
    {
      <div className="alert alert-danger">{error}</div>
    }
  }
  const showSuccess=()=>
  {
    if(success)
    {
      <div className="alert alert-success">{success}</div>
    }
  }
  return (
    <>
    <Navbar/>
    {
      showError()
    }
    {
      showSuccess()
    }
    <div className="container-fluid my-5 text-center">
    <main className="form-signin w-25 m-auto border border-primary border-2 p-2 ">
        <form>
          <img className="mb-4" src="logo192.png" alt="" width="72" height="57"/>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <div className="form-floating ">
            <input type="text" className="form-control"  placeholder="a" onChange={e=>setUsername(e.target.value)} />
            <label for="floatingInput">Username</label>
          </div>
     
          {/* <div className="form-floating">
            <input type="number" className="form-control"  placeholder="a"/>
            <label for="floatingInput">Contact Number</label>
          </div>
           */}
      
          <div className="form-floating">
            <input type="email" className="form-control"  placeholder="a"onChange={e=>setEmail(e.target.value)} />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  onChange={e=>setPassword(e.target.value)}/>
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit"  onClick={handleSubmit}>Register</button>
          Have an account?Please <a href="signin">Signin</a>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
</div>
    
    </>
  )
}

export default Register