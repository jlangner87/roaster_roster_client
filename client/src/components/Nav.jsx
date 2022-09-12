import { Link } from "react-router-dom"
import beanLink from '../page_assets/BEANS.png'
import roasterLink from '../page_assets/ROASTERS.png'
import retailerLink from '../page_assets/RETAILERS.png'
import brewerLink from '../page_assets/BREWERS.png'

const Nav = () => {

  return (
    <div className="nav">
      <Link to='/' className="home_link">Home</Link>
      <br />
      <div className="link_container">
      <Link to="/beans"><img src={beanLink} alt="bean link" className="nav_card" /></Link>
      <br/>
      <Link to="/roasters"><img src={roasterLink} alt="bean link" className="nav_card" /></Link>
      <br />
      <Link to='/retailers'><img src={retailerLink} alt="bean link" className="nav_card" /></Link>
      <br/>
      <Link to='/brewers'><img src={brewerLink} alt="bean link" className="nav_card" /></Link>
      </div>
    </div>
  )
}

export default Nav