import { BASE_URL } from "../globals"
import { useState } from "react"
import {useNavigate } from "react-router-dom"
import axios from "axios"

const BeanForm = () => {
  let navigate = useNavigate()
  let initialState = {
    name: '',
    roaster: Number,
    origin: '',
    grind: '',
    roast: '',
    description: '',
    organic: Boolean,
    buy_link: '',
    image: '',
    price: Number,
    retailer: Number
  }
  
  const [formState, setFormState]= useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}/api/beans/add`, formState)
    setFormState(initialState)
    navigate('/beans')
  }


  return (
    <div className="new_bean_form">
      <h1 className="heading">Add New Beans </h1>
      <div className="bean_form_container">
        <form onSubmit={handleSubmit} className="bean_form">
          <label for="name">Bean Name:</label><br/>
          <input onChange={handleChange} value={formState.name} id="name" type="text" placeholder="Bean Name"/><br/>
          <br></br>

          <label for="roaster">Roaster ID:</label><br/>
          <input onChange={handleChange} value={formState.roaster} id="roaster" type="number" placeholder="Roaster ID"/><br/>
          <br></br>

          <label for="origin"> Origin: </label>
          <select onChange={handleChange} value={formState.origin} id="origin" name="origin">
              <option value="Not Specified"> Origin </option>
              <option value="Brazil">Brazil</option>
              <option value="Colombia">Colombia</option>
              <option value="Etheopia">Etheopia</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Hawaii">Hawaii</option>
              <option value="India">India</option>
              <option value="Kenya">Kenya</option>
              <option value="Mexico">Mexico</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Peru">Peru</option>
              <option value="Sumatra">Sumatra</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Yamen">Yamen</option>
              <option value="Other">Other</option>
          </select><br/>
          <br></br>

          <label for="roast">Roast:</label>
          <select onChange={handleChange} value={formState.roast} id="roast">
              <option value="Espresso">Espresso</option>
              <option value="Dark">Dark Roast</option>
              <option value="Dark">Medium Roast</option>
              <option value="Light">Light Roast</option>
              <option value="Blonde">Blonde Roast</option>
              <option value="Other">Other Roast</option>
          </select><br/>
          <br></br>

          <label for="grind">Grind:</label>
          <select onChange={handleChange} value={formState.grind} id="grind" name="grind">
              <option value="Not Specified"></option>
              <option value="Whole Bean">Whole Bean</option>
              <option value="Coarse Grind">Coarse Grind</option>
              <option value="Fine Grind">Fine Grind</option>
          </select><br/>
          <br></br>

          <label for="organic">Organic:</label>
          <select onChange={handleChange} value={formState.organic} id="organic" name="organic">
          <option value={formState.grind}></option>
              <option value={true}>Organic</option>
              <option value={false}>Non-Organic</option>

          </select><br/>
          <br></br>

          <label for="description"> Description: </label><br/>
          <textarea onChange={handleChange} value={formState.description} id="description" type="text" placeholder='Description'/><br/>

          <label for="price">Price:</label><br/>
          <input onChange={handleChange} value={formState.price} id="price" type="number" placeholder='Price (0.00)'/><br/>
          <p className="notation">Do not include currency symbols ($ € ¥ etc.)</p>
          <br></br>

          <label for="buy_link">Purchase Link:</label><br/>
          <input onChange={handleChange} value={formState.buy_link} id="buy_link" placeholder='Purchace Link' type="text"/><br/>
          <p className="notation">Incude full url</p>
          <br></br>

          <label for="image">Product Image URL:</label><br/>
          <input onChange={handleChange} value={formState.image} id="image" type="text" placeholder='Product Image URL'/><br/>
          <p className="notation">Incude full url</p>
          <br></br>

          <label for="retailer">Retailer ID:</label><br/>
          <input onChange={handleChange} value={formState.retailer} id="retailer" type="number" placeholder="Retailer ID"/><br/>
          <br></br>

          <button type="submit" className="update">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default BeanForm