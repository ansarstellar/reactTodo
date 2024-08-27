import React from 'react'
import { useState } from 'react';

export default function TodoInput(props) {

  const { handleAddTodos , todoValue , setTodoValue } = props
  

  // function handleChange(event) {

  // }

  return (
    <div className='main'>
      <header>
        <input value={todoValue} type="text" onChange={(e) => {
          setTodoValue(e.target.value)
        }} placeholder='Enter todo...'/>
        <button onClick={() => {
          handleAddTodos(todoValue)
          setTodoValue("");
        }}>Add</button>
      </header>
    </div>
  )
}
