import Nav from './Nav'
import Collections from './Collections'
import logo from '../page_assets/Header_README.png'
import mobileLogo from '../page_assets/mobile_logo.png'

const Header = () => {

  return (
    <div className="header">
      <img className="logo" src={logo} />
      <img className="mobile_logo" src={mobileLogo} />
      <Nav/>
      <Collections/>
    </div>
  )
}

export default Header