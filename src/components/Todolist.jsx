import React from 'react'
import Todocard from './todocard'
export default function Todolist(props) {

  const {todos, handleDelete} = props;

  return (
    <ul className='main'>
      {todos.map((todo, todoindex) => {
        return (
          <Todocard {...props} key={todoindex} index={todoindex}>
              <p>{todo}</p>
          </Todocard>
        )
      })}
    </ul>
  )
}
