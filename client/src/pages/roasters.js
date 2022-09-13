import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Roasters = () => {
  const [roasters, setRoasters] = useState([{}])
  useEffect(() => {
    const listRoasters = async () => {
      let res = await axios.get(`${BASE_URL}/api/roasters/all`)
      setRoasters(res.data)
    }
    listRoasters()
  }, [])
  return (
    <div className="brewer_profile">
      <h1 className="heading" id="top">
        Browse all Roasters
      </h1>
      {roasters.map((roaster) => (
        <div className="bean_card">
          <a href="#top" className="scroll">
            <button className="toTop_roast">🔝</button>
          </a>
          <br></br>
          <Link to={`/roasters/${roaster.id}`}>
            <h3 className="roaster_name">{roaster.name}</h3>
            <h3 className="bean_detail">{roaster.location}</h3>
            <img className="product_pic" src={roaster.logo} />
          </Link>
          <br />
          <a className="buy_link" href={roaster.wesite}>
            <button>Visit Website</button>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Roasters
