import Login from "./login"
import { Link } from "react-router-dom"

const Nav = () => {

  return (
    <div className="nav">
      <h4>This is the nav control. It will go somewhere</h4>
      <h5>A dropdown box top right would be nice</h5>
      <Link to='/' className="nav_link">Home</Link>
      <br />
      <Link to="/roasters" className="nav_link">All Roasters</Link>
      <br />
      <Link to="/beans" className="nav_link">All Beans</Link>
      <br/>
      <Link to='/retailers' className="nav_link">All Retailers</Link>
      <br/>
        <button>Log in</button>
        <p>::conditional rendering::</p>
        <button>Log out</button>
    </div>
  )
}

export default Nav