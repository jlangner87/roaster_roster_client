import Login from "./login"
import { Link } from "react-router-dom"

const Nav = () => {

  return (
    <div className="nav">
      <h4>This is the nav control. It will go somewhere</h4>
      <Link to='/'>Home</Link>
      <Login/>
      

    </div>
  )
}

export default Nav