const RoasterForms = () => {

  return (
    <div className="roaster_form">
      <div className="new_roaster_container">
        <h1 className="form_header">Register your Roasterie</h1>
        <form className="roaster_form">
          <label for="roaster_name">Roasterie Name:</label><br/>
          <input id="roaster_name" type="text" /><br/>
          <label for="roaster_origin"> State: </label><br/>
          <input id="roaster_origin" type="text"/><br/>
          <label for="description"> Description: </label><br/>
          <textarea id="description" type="text"/><br/>
          <label for="buy_url">Website Link:</label><br/>
          <input id="buy_url" type="url"/><br/>
          <label for="roaster_image">Cover Image Upload:</label><br/>
          <input id="roaster_image" type="file" /><br/>
          <br/>
          <button className="update">REGISTER</button>
        </form>
      </div>
    </div>
  )
}

export default RoasterForms