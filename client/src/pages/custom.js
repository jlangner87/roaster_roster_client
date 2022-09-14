import '../App.css'
import { Link } from 'react-router-dom'

const Custom = () => {
  return (
    <div className="custom_search_page">
      <h1 className="heading">Brew a Custom Search</h1>
      <form className="custom_form">
        <div>
          <label for="origin"> Origin: </label>
          <select>
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
          </select>
        </div>
        <div>
          <label for="roast">Roast Type:</label>
          <select>
            <option value="Not Specified"></option>
            <option value="Espresso">Espresso</option>
            <option value="Dark">Dark Roast</option>
            <option value="Light">Light Roast</option>
            <option value="Blonde">Blonde Roast</option>
          </select>
        </div>
        <div>
          <label for="grind">Grind Type:</label>
          <select>
            <option value="Not Specified"></option>
            <option value="Whole Bean">Whole Bean</option>
            <option value="Coarse Grind">Coarse Grind</option>
            <option value="Fine Grind">Fine Grind</option>
          </select>
        </div>
        <div>
          <label for="organic">Organic:</label>
          <select>
            <option></option>
            <option value={true}>Organic</option>
            <option value={false}>Non-Organic</option>
          </select>
        </div>
        <div>
          <button className="search_btn">SEARCH</button>
        </div>
        <br />
      </form>
    </div>
  )
}

export default Custom
