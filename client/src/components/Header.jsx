import Nav from './Nav'
import Collections from './Collections'
import logo from '../page_assets/Header_README.png'

const Header = () => {

  return (
    <div className="header">
      <img className="logo" src={logo} />
      <Nav/>
      <Collections/>
    </div>
  )
}

export default Header