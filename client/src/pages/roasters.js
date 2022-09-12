import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Roasters = () => {
  const [roasters, setRoasters] = useState([{}])
  useEffect(() => {
    const listRoasters = async () => {
      let res = await axios.get(`${BASE_URL}/api/roasters/all`)
      setRoasters(res.data)
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    listRoasters()
  }, [])
  return (
    <div className="brewer_profile">
      <h1 className="page_header">Browse all Roasters </h1>
      {roasters.map((roaster) => (
        <div className="bean_card">
          <h3 className="bean_name">{roaster.name}</h3>
          <h3 className="bean_detail">{roaster.location}</h3>
          <img className="product_pic" src={roaster.logo} />
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
