import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { verifyEmail } from '../api/userApi'
import { useParams } from 'react-router-dom'

const EmailConfirmation = () => {
  const [success,setSuccess]= useState('')
  const [error , setError]= useState('')
  let token = useParams()
  useEffect(()=>{
    verifyEmail(token)
    .then(data => {
      console.log(data)
       if(data.error)
      {
        setError(data.error)
        setSuccess(false)
      }
      if(data.success)
      {
        setSuccess(data.success)
      }
    })
  })
  const showError =()=>{
    if(error)
    {
      <div className="alert alert-danger">{error}</div>
    }
  }
  const showSuccess =()=>{
    if(success)
    {
      <div className="alert alert-primary">{success}</div>
    }
  }
  
  return (
    <>
    {
      showError()
    }
    {
      showSuccess()
    }
    <Navbar/>
    <h2>Email is verified</h2>
    <Footer/>
    </>
  )
}

export default EmailConfirmation