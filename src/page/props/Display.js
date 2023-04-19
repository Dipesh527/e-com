import React from 'react'

const Display = ({name , price, product , img}) => {
  
  // let{name , price , product} = props
  return (
    <>
    {/* <div>
      <h1>Name: {props.name}</h1>
      <h1>Name: {props.price}</h1>
      <h1>Name: {props.product}</h1>
    </div> */}

  <div className="col">
    <div className="card">
      <img src={img} style={{height: "400px" , width:"500px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h5 className="card-price">{price}</h5>
        <p className="card-text">{product}</p>
      </div>
    </div>
  </div>
    </>
    )
}

export default Display