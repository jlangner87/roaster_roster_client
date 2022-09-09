const BeanForm = () => {

  return (
    <div className="new_bean_form">
            <h1 className="page_header">Add New Beans </h1>
      <div className="bean_form_container">
        <form className="bean_form">
          <label for="bean_name">Bean Name:</label><br/>
          <input id="bean_name" type="text" /><br/>
          <br></br>

          <label for="roaster_Id">Roaster ID:</label><br/>
          <input id="roaster_Id" type="text" /><br/>
          <br></br>

          <label for="bean_origin"> Origin: </label><br/>
          <br></br>

          <label>Roast Type:</label><br/>
          <br></br>

          <label for="grind">Grind Type:</label><br/>
          <select id="grind" name="grind">
              <option value="Not Specified"></option>
              <option value="Whole Bean">Whole Bean</option>
              <option value="Coarse Grind">Coarse Grind</option>
              <option value="Fine Grind">Fine Grind</option>
          </select><br/>
          <br></br>

          <label>Organic:</label><br/>
          <label for="organic"> True: </label>
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

          <button className="update">SUBMIT NEW BEAN</button>
        </form>
      </div>
    </div>
  )
}

export default BeanForm