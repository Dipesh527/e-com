import React from 'react'

const TodosDisplay = ({todo}) => {
  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{todo.id}</li>
          <li className="list-group-item">{todo.title}</li>
          <li className="list-group-item">{todo.userId}</li>
        </ul>
      </div>
    </>
  )
}

export default TodosDisplay