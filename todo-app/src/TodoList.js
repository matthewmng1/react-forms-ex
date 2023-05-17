import React, {useState} from "react"
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  const tasks = todos.map(todo => (
    <Todo 
    key = {todo.id}
    id = {todo.id}
    todo = {todo.todo}
    handleRemove={removeTodo}/>
  ))

  return (
    <div>
      <h1>To-do List</h1>
      <NewTodoForm createTodo={addTodo}/>
      {tasks}
    </div>
  )
}

export default TodoList;