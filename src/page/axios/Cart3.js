import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Cart3 = () => {
  let params = useParams();
  const[posts, setPosts] = useState([]);
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
    .then(res=>res.data)
    .then(data=>
      {
        console.log(data)
        setPosts(data)
      }
      )

  },[])
  return (
    <>
    <img src={posts.image} height="120" alt="" />
    <div>{posts.id}</div>
    <div>{posts.title}</div>

    </>
  )
}

export default Cart3