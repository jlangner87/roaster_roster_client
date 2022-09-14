import { BASE_URL } from "../globals"
import { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"

const UpdateDeleteBean = () => {
  let navigate = useNavigate()
  let {beans_id} = useParams()
  let [bean, setBean] = useState()


  useEffect(() => {
    const thisBean = async () => {
      let response = await axios.get(`${BASE_URL}/api/beans/${beans_id}`)
      setBean(response.data)
      console.log({bean})
    }
    thisBean()
  }, [])

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
    let res = await axios.patch(`${BASE_URL}/api/beans/${beans_id}`, formState)
    setFormState(initialState)
    alert(`Beans with id ${beans_id} was updated.`)
    navigate(0)
  }



  const deleteBean = async (event) => {
    let res = await axios.delete(`${BASE_URL}/api/beans/${beans_id}`)
    alert(`You have deleted bean with bean id ${beans_id}`)
    navigate('/beans')
  }


  return (
    <div className="profile">
      <h1 className="heading">Update or Delete This Bean </h1>
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
              <option value="Not Specified"></option>
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

          <label for="roast">Roast Type:</label>
          <select onChange={handleChange} value={formState.roast} id="roast" name="roast">
              <option value="Not Specified"></option>
              <option value="Espresso">Espresso</option>
              <option value="Dark">Dark Roast</option>
              <option value="Light">Light Roast</option>
              <option value="Blonde">Blonde Roast</option>
          </select><br/>


          <br></br>

          <label for="grind">Grind Type:</label>
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
          <textarea onChange={handleChange} value={formState.description} id="description" type="text" placeholder="Descripton"/><br/>
          <br></br>

          <label for="price">Price:</label><br/>
          <input onChange={handleChange} value={formState.price} id="price" type="number" placeholder='Price (0.00)'/><br/>
          <p className="notation">Do not include currency symbols ($ € ¥ etc.)</p>
          <br></br>

          <label for="buy_link">Purchase Link:</label><br/>
          <input onChange={handleChange} value={formState.buy_link} id="buy_link" type="text" placeholder="Product Link"/><br/>
          <p className="notation">Incude full url</p>
          <br></br>

          <label for="image">Product Image URL:</label><br/>
          <input onChange={handleChange} value={formState.image} id="image" type="text" placeholder="Product Image URL"/><br/>
          <p className="notation">Incude full url</p>
          <br></br>

          <label for="retailer">Retailer ID:</label><br/>
          <input onChange={handleChange} value={formState.retailer} id="retailer" type="number" placeholder="Retailer ID"/><br/>
          <br></br>

          <button type="submit" className="update">SUBMIT</button>
        </form>
        <button className="delete" onClick={deleteBean}>DELETE</button>
      </div>
    </div>
  )
}

export default UpdateDeleteBean