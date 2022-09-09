import { Link } from "react-router-dom"

const Nav = () => {

  return (
    <div className="nav">
      <div className="link_container">
      <Link to='/' className="nav_link">Home</Link>
      <br />
      <Link to="/roasters" className="nav_link">Roasters</Link>
      <br />
      <Link to="/beans" className="nav_link">Beans</Link>
      <br/>
      <Link to='/retailers' className="nav_link">Retailers</Link>
      </div>
    </div>
  )
}

export default Nav