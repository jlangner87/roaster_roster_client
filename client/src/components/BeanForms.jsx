const BeanForm = () => {

  return (
    <div className="bean_form_page">
      <h1>This is my bean form component!</h1>
      <div className="bean_form_container">
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
          <label for="description"> Description: </label>
          <textarea id="description" type="text"/>
          <label for="price">Price:</label>
          <input id="price" type="number"/>
          <label for="buy_url">Purchase Link:</label>
          <input id="buy_url" type="url"/>
          <label for="bean_image">Image Upload:</label>
          <input id="bean_image" type="file" />

        </form>
      </div>
      <button className="update">SUBMIT NEW BEAN</button>
    </div>
  )
}

export default BeanForm