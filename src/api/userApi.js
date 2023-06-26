// import { json } from "react-router-dom"

// export const userRegister = (username,email,password)=>
// {
//     let user = {username,email,password}
//     return fetch(`http://localhost:4000/register`,{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify(user) 
     
//     })
//     .then(res=>res.json())
//     .catch(err=>console.log(err))
// }

// export const forgetPassword = (email)=>
// {
//   let user = {email}
//   return fetch(`http://localhost:4000/forgetpassword`,{
//     method:'POST',
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify(user)
//   })
//   .then(res =>res.json())
//   .catch(error =>console.log(error))
// }
// export const resetPassword = (token,password)=>
// {
//   let user = {password}
//   return fetch(`http://localhost:4000/resetpassword/${token.token}`,{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify(user)
//   })
//   .then(res=>res.json())
//   .catch(error=>console.log(error))
// }
// export const signIn = (email,password)=>
// {
//   let user= {email,password}
//   return fetch(`http://localhost:4000/signin`,{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify(user)
//   })
//   .then(res =>res.json())
//   .catch(error=>console.log(error))
// }



export const userRegister=(username,email,password)=>
{
  let  user= {username,email,password}
  fetch(`http://localhost:5000/register`,{
    method:"POST",
    headers:{
    "Content-Type":"application/json",
    },
    body:JSON.stringify(user)

  })
  .then(res =>res.json())
  .catch(err=>console.log(err))

}
export const verifyEmail = (token)=>
{
  return fetch(`http://localhost:5000/verifyemail/${token}`)
  .then(res=>res.json())
  .catch(err=>console.log(err))
}