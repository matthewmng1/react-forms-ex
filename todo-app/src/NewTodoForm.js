import React, {useState} from "react"
import {v4 as uuid} from "uuid"

const NewTodoForm = ({ createTodo }) => {

  const INITIAL_STATE = ("")
  
  const [todo, setTodo] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({todo, id: uuid()})
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">To-do List</label><br/>
        <input 
          id="todo"
          type="text"
          placeholder="New Task"
          name="todo"
          value={todo}
          onChange={handleChange}
          />
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm;