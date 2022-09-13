import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Retailers = () => {
  const [retailers, setRetailers] = useState([{}])
  useEffect(() => {
    const listRetailers = async () => {
      let res = await axios.get(`${BASE_URL}/api/retailers/all`)
      setRetailers(res.data)
    }
    listRetailers()
  }, [])
  return (
    <div className="brewer_profile">
      <h1 className="heading" id="top">
        Browse all Retailers{' '}
      </h1>
      {retailers.map((retailer) => (
        <div className="bean_card">
          <a href="#top" className="scroll">
            <button className="toTop_roast">🔝</button>
          </a>
          <br></br>
          <Link to={`/retailers/${retailer.id}`}>
            <h3 className="bean_name">{retailer.name}</h3>
            <h3 className="bean_detail">{retailer.location}</h3>
            <img className="product_pic" src={retailer.logo} />
          </Link>
          <br />
          <a className="buy_link" href={retailer.website}>
            <button>Visit Site</button>
          </a>
        </div>
      ))}
    </div>
  )
}
export default Retailers
