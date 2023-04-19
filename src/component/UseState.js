// Types of Hooks
// 1) UseState-> It is a hook to manage states and variables .
// 2)UseEffect -> It is used used to show the effect when the state changes .
// 3)UseContext
// 4)UseRef
// 5)UseMemo

import React, { useState } from 'react'

const UseState = () => {
  const[count , setCount] = useState(10);
  const Increase = ()=> {
    setCount(count+1)
  }
  const Dcrease = ()=> {
    setCount(count-1)
  }
  // [variable, function] = useState(initial value)
  // (0-9)=> numbr
  // ("strinf") => string
  // ([]) => array
  // ({}) => objct
    return (
    <>
      <div style={{backgroundColor:"red"}}>COUNT:{count}</div>
      {
        count>0 &&   <button onClick={Dcrease}>Dncrease</button>
      }
      {
        count<10 &&  <button onClick={Increase}>Increase</button>
    
      }

    </>
    )
}

export default UseState