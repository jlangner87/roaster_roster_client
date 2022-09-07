const BeanForm = () => {

  return (
    <div className="new_bean_form">
      <div className="bean_form_container">
        <h1 className="form_header">Add a New Bean</h1>
        <form className="bean_form">
          <label for="bean_name">Bean Name:</label><br/>
          <input id="bean_name" type="text" /><br/>
          <label for="bean_origin"> Origin: </label><br/>
          <input for="bean_origin" type="text"/><br/>
          <br></br>
          <label>Bean Type:</label><br/>
          <label for="whole_bean">Whole Bean:</label>
          <input for="whole_bean" type="radio" /><br/>
          <label for="ground">Ground:</label>
          <input for="" type="radio" /><br/>
          <label for="both">Both:</label>
          <input for="both" type="radio" /><br/>
          <br></br>
          <label>Organic:</label><br/>
          <label for="organic"> True: </label>
          <input for="organic" type="radio" /><br/>
          <br></br>
          <label for="description"> Description: </label><br/>
          <textarea id="description" type="text"/><br/>
          <label for="price">Price:</label><br/>
          <input id="price" type="number"/><br/>
          <label for="buy_url">Purchase Link:</label><br/>
          <input id="buy_url" type="url"/><br/>
          <label for="bean_image">Image Upload:</label><br/>
          <input id="bean_image" type="file" /><br/>
          <br/>
          <button className="update">SUBMIT NEW BEAN</button>
        </form>
      </div>
    </div>
  )
}

export default BeanForm