import React, {useState} from "react"; 

const Box = ({id, width=10, height=10, color="red", handleRemove}) => {
  const removeBox = () => handleRemove(id);
  return (
    <div>
      <div style={{
      width: `${width}em`,
      height: `${height}em`,
      backgroundColor: color
      }}>
      </div>
      <button onClick={removeBox}>Remove Box</button>
    </div>
    )
}
    

export default Box;