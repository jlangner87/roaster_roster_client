import './App.css'
import Home from './pages/home'
import { Route, Routes, useParams } from 'react-router-dom'
import Roasters from './pages/roasters'
import Beans from './pages/beans'
import Header from './components/Header'
import Footer from './components/Footer'
import RoasterHome from './pages/roasterHome'
import Retailers from './pages/retailers'
import BeanProfile from './components/BeanProfile'
import RoasterCollection from './components/collections/Roaster'

function App() {
  let { beans_id } = useParams()
  console.log(beans_id)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roasters" element={<Roasters />} />
        <Route path="/beans" element={<Beans />} />
        <Route path="/beans/:beans_id" element={<BeanProfile />} />
        <Route
          path="/beans/roaster/:roaster_id"
          element={<RoasterCollection />}
        />
        <Route path="/retailers" element={<Retailers />} />

        <Route path="/admin" element={<RoasterHome />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
