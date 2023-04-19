import React from 'react'

const Data1 = ({post}) => {
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
            </div>
          </div>
        </div>

    </>
  )
}

export default Data1