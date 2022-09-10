import { BASE_URL } from "../globals"
import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateDeleteBean = () => {
let {beans_id} = useParams()
let navigate = useNavigate()
const [beans, setBeans] =useState('')

const deleteBean = async () => {
    let res = await axios.delete(`${BASE_URL}/api/beans/${beans_id}`)
    alert(`You have deleted this bean. Taking you back to all beans.`)
    navigate(-1)
  }


  return (
    <div className="update_delete_bean">
      <h1 className="page_header">Add New Beans </h1>
      <div className="bean_form_container">
        <form className="bean_form">
          <label for="bean_name">Bean Name:</label><br/>
          <input id="bean_name" type="text" /><br/>
          <br></br>

          <label for="roaster_Id">Roaster ID:</label><br/>
          <input id="roaster_Id" type="text" /><br/>
          <br></br>

          <label for="origin"> Origin: </label>
          <select id="origin" name="origin">
              <option value="Not Specified"></option>
              <option value="Brazil">Brazil</option>
              <option value="Colombia">Colombia</option>
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
          <select id="roast" name="roast">
              <option value="Not Specified"></option>
              <option value="Espresso">Espresso</option>
              <option value="Dark">Dark Roast</option>
              <option value="Light">Light Roast</option>
              <option value="Blonde">Blonde Roast</option>
          </select><br/>


          <br></br>

          <label for="grind">Grind Type:</label>
          <select id="grind" name="grind">
              <option value="Not Specified"></option>
              <option value="Whole Bean">Whole Bean</option>
              <option value="Coarse Grind">Coarse Grind</option>
              <option value="Fine Grind">Fine Grind</option>
          </select><br/>
          <br></br>
          <label for="organic">Organic:</label>
          <select id="organic" name="organic">
          <option value={false}></option>
              <option value={true}>Organic</option>
              <option value={false}>Non-Organic</option>

          </select><br/>
          <br></br>

          <label for="description"> Description: </label><br/>
          <textarea id="description" type="text"/><br/>
          <br></br>

          <label for="price">Price:</label><br/>
          <input id="price" type="number"/><br/>
          <br></br>

          <label for="buy_url">Purchase Link:</label><br/>
          <input id="buy_url" type="url"/><br/>
          <br></br>

          <label for="bean_image">Product Image URL:</label><br/>
          <input id="bean_image" type="text" /><br/>
          <br></br>

          <label for="retailer_Id">Retailer ID:</label><br/>
          <input id="retailer_Id" type="text" /><br/>
          <br></br>

          <button className="update">SUBMIT NEW BEAN</button><br/>
          <br></br>
          <button onClick={deleteBean} className="delete">DELETE BEAN</button>
        </form>
        </div>
    </div>
  )
}

export default UpdateDeleteBean