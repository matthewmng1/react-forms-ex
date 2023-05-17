import React from "react";

const Todo = ({id, todo, handleRemove}) => {
  const removeTodo = () => handleRemove(id);

  return (
    <div>
      <li>{todo} <button onClick={removeTodo}>x</button> 
</li>
    </div>
  );
}

export default Todo;
