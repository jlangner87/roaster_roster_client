import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Roasters from './roasters'
import RoasterHome from './roasterHome'
import UserForms from '../components/UserForms'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <Link to="/roasters">All Roasters</Link>
      <br />
      <Link to="/beans">All Beans</Link>
    </div>
  )
}

export default Home
