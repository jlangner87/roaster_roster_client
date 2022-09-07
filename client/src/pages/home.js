import '../App.css'
import { Link } from 'react-router-dom'
import logo from '../page_assets/logo.png'
import RoasterForms from '../components/Future Components/RoasterForms'

const Home = () => {
  return (
    <div className="home">
      <h3>HOMEPAGE</h3>
      <img src={logo} />
      <RoasterForms />
      <p>End Homepage</p>
    </div>
  )
}

export default Home
