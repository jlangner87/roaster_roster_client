const BeanForm = () => {

  return (
    <div className="bean_form_page">
      <div className="bean_form_container">
        <h1 className="form_header">Add a New Bean</h1>
        <form className="bean_form">
          <label for="bean_name">Bean Name:</label><br/>
          <input id="bean_name" type="text" /><br/>
          <label for="bean_origin"> Origin: </label><br/>
          <input for="bean_origin" type="text"/><br/>
          <label for="bean_type">Bean Type:</label><br/>
          <input id="bean_type" type="text" /><br/>
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
        </form>
      </div>
    </div>
  )
}

export default BeanForm