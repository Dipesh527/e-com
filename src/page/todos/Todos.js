import React, { useEffect, useState } from 'react'
import TodosDisplay from './TodosDisplay';

const Todos = () => {
  const[todos, setTodos] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {

      console.log(json)
      setTodos(json)
    }
      )
  },[])
  return (
    <>
    {
      todos.map((v)=>{
      return <TodosDisplay todo={v}/>
      })
    }
    </>
  )
}

export default Todos