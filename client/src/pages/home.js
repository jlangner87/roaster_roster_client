import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Roasters from './roasters'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Roasters />
      <Footer />
    </div>
  )
}

export default Home
