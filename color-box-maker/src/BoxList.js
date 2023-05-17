import React, {useState} from "react";
import Box from "./Box"
import {v4 as uuid} from "uuid"
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const INITIAL_STATE = []

  const [box, setBox] = useState(INITIAL_STATE)
  const addBox = (newBox) => {
    setBox(box => [...box, newBox])
  }
  const removeBox = (id) => {
    setBox(box => box.filter(box => box.id !== id))
  }

  return(
    <div>
      <h1>Color Box Maker</h1>
      <NewBoxForm addBox ={addBox}/>
      <div>
        {box.map(({id, width, height, color}) => 
        <Box id={id} width={width} height={height} color={color} handleRemove={removeBox}/>)}
      </div>
    </div>
  )

}

export default BoxList;