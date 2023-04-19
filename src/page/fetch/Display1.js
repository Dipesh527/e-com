import React, { useEffect, useState } from 'react'
import Data1 from './Data1';

const Display1 = () => {
  const[posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>
      {
        console.log(json)
        setPosts(json)
      }
      )

  },[])
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-6">
    {
      posts.map((v)=>{
        return <Data1 post={v}/>
      })
    }
      </div>

    </>
  )
}

export default Display1