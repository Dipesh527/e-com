import React from 'react'
import { Link } from 'react-router-dom'


const Data2 = ({post}) => {
  return (
    <>
        <div className="col">
          <div className="card">
            <img src={post.image} style={{width:"100%" , height:"450px" }} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{fontSize:"44px"}}>{post.title}</h5>
              <p className="card-text">
                {post.description}
              </p>
              <Link to={  `/product/${post.id}`}><button>View More</button></Link>
            </div>
          </div>
        </div>

    
    </>
  )
}

export default Data2