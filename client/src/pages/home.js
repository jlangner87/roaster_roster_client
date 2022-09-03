import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Roasters from './roasters'
import BeanForm from '../components/BeanForms'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <BeanForm />
      <Roasters />
      <Footer />
    </div>
  )
}

export default Home
