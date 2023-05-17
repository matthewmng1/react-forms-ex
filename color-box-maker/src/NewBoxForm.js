import React, {useState} from "react"; 
import {v4 as uuid} from "uuid"

const NewBoxForm = ({addBox}) => {
  const INITIAL_STATE = {
    width: "",
    height: "",
    color: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData, 
      [name] :value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({...formData, id: uuid()});
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input 
        id="width"
        type="number"
        name="width"
        placeholder="Enter Width"
        value={formData.width}
        onChange={handleChange}/>

      <label htmlFor="height">Height:</label>
      <input 
        id="height"
        type="number"
        name="height"
        placeholder="Enter Height"
        value={formData.height}
        onChange={handleChange}/>

      <label htmlFor="color">Color:</label>
      <input 
        id="color"
        type="text"
        name="color"
        placeholder="Enter Color"
        value={formData.color}
        onChange={handleChange}/>

      <button>Add Color Box</button>
    </form>
  )
}

export default NewBoxForm;