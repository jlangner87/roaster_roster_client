import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Beans = () => {
  const [beans, setBeans] = useState([{}])
  useEffect(() => {
    const listBeans = async () => {
      let res = await axios.get(`${BASE_URL}/api/beans/all`)
      console.log(res.data)
      setBeans(res.data)
    }
    listBeans()
  }, [])

  return (
    <div className="baean_profile">
      <h1 className="page_header">Browse all Beans </h1>
      {beans.map((bean) => (
        <div className="bean_card">
          <h3 className="bean_name">{bean.name}</h3>
          <h3 className="bean_detail">${bean.price}</h3>
          <img className="product_pic" src={bean.image} />
          <p className="bean_description">{bean.description}</p>
          <a className="buy_link" href={bean.buy_link}>
            <button>Buy Now</button>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Beans
