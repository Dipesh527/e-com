import React, { useEffect, useState } from 'react'
import UserDisplay from './UserDisplay';

const Users = () => {
  const[users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(json=>
      {
        console.log(json)
        setUsers(json)
      }
      )

  },[])
  return (
    <>

    {
      users.map((v)=>{
        return <UserDisplay user={v}/>
      })
    }
    </>
  )
}

export default Users