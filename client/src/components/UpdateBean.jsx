const UpdateDeleteBean = () => {

  return (
    <div className="update_delete_bean">
      <div className="bean_form_container">
        <h1 className="form_header">Update A Bean</h1>
        <form className="bean_form">
          <label for="bean_name">Bean Name:</label><br/>
          <input id="bean_name" type="text" /><br/>
          <label for="bean_origin"> Origin: </label><br/>
          <input for="bean_origin" type="text"/><br/>
          <label for="whole_bean">Whole Bean:</label><br/>
          <input for="whole_bean" type="radio" /><br/>
          <label for="ground">Ground:</label><br/>
          <input for="" type="radio" /><br/>
          <label for="both">Whole Bean or Ground:</label><br/>
          <input for="both" type="radio" /><br/>
          <input for="organic" type="radio" /><br/>
          <input for="organic" type="radio" /><br/>
          <label for="roast_type">Roast Type:</label><br/>
          <input id="roast_type" type="text" /><br/>
          <label for="organic"> Organic </label><br/>
          <input for="organic" type="radio" /><br/>
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
          <br/>
          <button className="delete">DELETE BEAN</button>
        </form>
        </div>
    </div>
  )
}

export default UpdateDeleteBean