import '../App.css'
import { Link } from 'react-router-dom'
import logo from '../page_assets/logo.png'

const Home = () => {
  return (
    <div className="home">
      <h3>HOMEPAGE</h3>
      <img src={logo} />
      <p>End Homepage</p>
    </div>
  )
}

export default Home
