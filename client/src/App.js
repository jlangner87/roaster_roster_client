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
import OriginCollection from './components/collections/Origin'
import RoastCollection from './components/collections/Roast'
import GrindCollection from './components/collections/Grind'
import RoasterProfile from './components/RoasterProfile'
import RetailerProfile from './components/RetailerProfile'
import Brewers from './pages/brewers'
import OrganicCollection from './components/collections/Organic'
import LowPriceCollection from './components/collections/LtFifteen'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roasters" element={<Roasters />} />
        <Route path="/roasters/:roasters_id" element={<RoasterProfile />} />
        <Route path="/beans" element={<Beans />} />
        <Route path="/beans/:beans_id" element={<BeanProfile />} />
        <Route
          path="/beans/roaster/:roaster_id"
          element={<RoasterCollection />}
        />
        <Route
          path="/collections/:organic_id"
          element={<OrganicCollection />}
        />
        <Route path="/price/low" element={<LowPriceCollection />} />
        <Route path="/retailers/:retailer_id" element={<RetailerProfile />} />
        <Route path="/brewers" element={<Brewers />} />
        <Route path="/beans/origin/:origin" element={<OriginCollection />} />
        <Route path="/retailers" element={<Retailers />} />
        <Route path="/roast/:roast_id" element={<RoastCollection />} />
        <Route path="/grind/:grind_id" element={<GrindCollection />} />
        <Route path="/admin" element={<RoasterHome />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
