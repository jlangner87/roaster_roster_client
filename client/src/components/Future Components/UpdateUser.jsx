const UpdateUser = () => {

  return (
    <div className="update_delete_user_form">
      <div className="update_delete_user_container">
        <h1 className="form_header">Register your yourself</h1>
        <form className="user_form">

          <label for="user_name">User Name:</label><br/>
          <input id="user_name" type="text" /><br/>
          <label>Category:</label><br/>
          <div className="categories">
            <label for="roaster"> Roaster: </label><br/>
            <input id="roaster" type="radio"/><br/>
            <label for="retailer"> Retailer: </label><br/>
            <input id="retailer" type="radio"/><br/>
            <label for="connoisseur"> Connoisseur: </label><br/>
            <input id="roaster" type="radio"/><br/>
          </div>   
          <label for="user_image">Avatar Upload:</label><br/>
          <input id="user_image" type="file" /><br/>
          <br/>
          <label for="email">Email:</label><br/>
          <input id="email" type="email" /><br/>
          <button className="update">UPDATE</button><br/>
          <button className="delete">DELETE</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser