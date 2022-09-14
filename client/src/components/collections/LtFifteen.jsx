import { BASE_URL } from '../../globals'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const LowPriceCollection = () => {
  const [beans, setBeans] = useState([{}])
  useEffect(() => {
    const listBeans = async () => {
      let res = await axios.get(`${BASE_URL}/api/beans/price/low`)
      setBeans(res.data)
    }
    listBeans()
  }, [])

  return (
    <div className="bean_profile">
      <h1 className="heading" id="top">Browse Beans by Under $15</h1>
      {beans.map((bean) => (
        <div className="bean_card">
            <a href="#top" className="scroll">
            <button className="toTop">🔝</button>
          </a>
          <Link to={`/beans/${bean.id}`}>
          <h3 className="bean_name">{bean.name}</h3>
          <h3 className="bean_detail">${bean.price}</h3>
          <img className="profile_image" src={bean.image} />
          </Link>
          <p className="bean_descript">{bean.description}</p>
          <a className="buy_link" href={bean.buy_link}>
            <button>Buy Now</button>
          </a>
        </div>
      ))}
    </div>
  )
}

export default LowPriceCollection