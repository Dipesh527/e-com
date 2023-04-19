import React ,{useEffect, useState} from 'react'

const UseStates1 = () => {
  const[search , setSearch] = useState(10)
  useEffect(()=>{
    alert("value change")
  },[search])
  const increase=()=>{
    setSearch(search +10)
  }
  const Dcrease=()=>{
    setSearch(search - 10)
  }
  return (
      <>

       <div>Count:{search}</div>
       {
        search< 50 && <button onClick={increase}>Increase</button>
       }
         {
        search>10 && <button onClick={Dcrease}>Dcrease</button>
       }
      </>
    )
}

export default UseStates1