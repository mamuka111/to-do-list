import React, { useState } from 'react'

export const TodoForm = () => {
    const[value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        console.log(value)
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='what is the task today?' onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>add task</button>
    </form>
  )
}
