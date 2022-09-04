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
      <Header />
      <Roasters />
      <RoasterHome />
      <UserForms />
      <Footer />
    </div>
  )
}

export default Home
