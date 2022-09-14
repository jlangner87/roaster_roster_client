import { BASE_URL } from '../globals'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Custom = () => {
  let navigate = useNavigate()
  let initialState = {
    origin: '',
    grind: '',
    roast: '',
    organic: Boolean
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    navigate(
      `/custom/${formState.origin}/${formState.grind}/${formState.roast}/${formState.organic}`
    )
    // setFormState(initialState)
  }

  return (
    <div className="custom_search_page">
      <h1 className="heading">Brew a Custom Search</h1>
      <form onSubmit={handleSubmit} className="custom_form">
        <div>
          <label for="origin"> Origin: </label>
          <select onChange={handleChange} value={formState.origin} id="origin">
            <option value="null" selected>
              Select One
            </option>
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
          </select>
        </div>
        <div>
          <label for="roast">Roast Type: </label>
          <select onChange={handleChange} value={formState.roast} id="roast">
            <option value="null" selected>
              Select One
            </option>
            <option value="Espresso">Espresso</option>
            <option value="Dark">Dark Roast</option>
            <option value="Medium">Medium Roast</option>
            <option value="Light">Light Roast</option>
            <option value="Blonde">Blonde Roast</option>
          </select>
        </div>
        <div>
          <label for="grind">Grind Type: </label>
          <select onChange={handleChange} value={formState.grind} id="grind">
            <option value="null" selected>
              Select One
            </option>
            <option value="Whole%20Bean">Whole Bean</option>
            <option value="Coarse%20Grind">Coarse Grind</option>
            <option value="Fine%20Grind">Fine Grind</option>
          </select>
        </div>
        <div>
          <label for="organic">Organic: </label>
          <select
            onChange={handleChange}
            value={formState.organic}
            id="organic"
          >
            <option></option>
            <option value="null" selected>
              Select One
            </option>
            <option value={true}>Organic</option>
            <option value={false}>Non-Organic</option>
          </select>
        </div>
        <div>
          <label for="submit">Find your brew: </label>
          <button type="submit" className="search_btn">
            SEARCH
          </button>
        </div>
        <br />
      </form>
    </div>
  )
}

export default Custom
