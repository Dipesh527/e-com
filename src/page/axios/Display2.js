import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Data2 from './Data2';

const Display2 = () => {
  const[posts, setPosts] = useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
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
    <div className="row row-cols-1 row-cols-md-4 g-6">

    {
      posts.map((v)=>{
        return <Data2 post={v} />

      })

    }
    </div>
    </>

    )
}

export default Display2