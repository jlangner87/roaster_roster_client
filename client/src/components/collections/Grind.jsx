import { BASE_URL } from '../../globals'
import { useEffect, useState } from 'react'
import { useParams, Link} from 'react-router-dom'
import axios from 'axios'

const GrindCollection = () => {
  let {grind_id} = useParams()
  const [beans, setBeans] = useState([{}])
  useEffect(() => {
    const listBeans = async () => {
      let res = await axios.get(`${BASE_URL}/api/beans/collection/${grind_id}`)
      setBeans(res.data)
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
    listBeans()
  }, [])

  return (
    <div className="bean_profile">
      <h1 className="heading">Browse Beans by {grind_id} </h1>
      {beans.map((bean) => (
        <div className="bean_card">
          <Link to={`/beans/${bean.id}`}>
          <h3 className="bean_name">{bean.name}</h3>
          <h3 className="bean_detail">${bean.price}</h3>
          <img className="profile_image" src={bean.image} />
          </Link>
          <p className="bean_description">{bean.description}</p>
          <a className="buy_link" href={bean.buy_link}>
            <button>Buy Now</button>
          </a>
        </div>
      ))}
    </div>
  )
}

export default GrindCollection