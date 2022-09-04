import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Roasters from './roasters'
import RoasterHome from './roasterHome'
import UserForms from '../components/UserForms'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Roasters />
      <Footer />
      <RoasterHome />
      <UserForms />
    </div>
  )
}

export default Home
