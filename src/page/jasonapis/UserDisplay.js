import React from 'react'

const UserDisplay = ({user}) => {
  return (
    <>
   {/* <div className='container m-4' >
  
    <h1 style={{fontSize:"32px" , fontFamily:"sans-serif", textAlign:"center" }}>
    {
    user.name
   } </h1>
   <ul style={{textAlign:"center" , listStyle:"none"}} >
    <li>{user.username}</li>
    <li>{user.phone}</li>
    <li>{user.email}</li>
    <li>{user.company.name}</li>
    <li>{user.address.city}</li>
   </ul>
   </div> */}
    <div className="card border-success mb-3" >
      <div className="card-header bg-transparent border-success">{user.name}</div>
        <div className="card-body text-success">
          <h5 className="card-title">{user.username}</h5>
          <p className="card-text">{user.company.bs}</p>
        </div>
       <div className="card-footer bg-transparent border-success">{user.website}</div>
    </div>


    </>
  )
}

export default UserDisplay