import Nav from './Nav'
import logo from '../page_assets/logo.png'

const Header = () => {

  return (
    <div className="header">
      <img className="logo" src={logo} />
      <h3>connecting the world to coffee</h3>
      <Nav/>
    </div>
  )
}

export default Header