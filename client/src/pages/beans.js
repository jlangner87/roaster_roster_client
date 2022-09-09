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
      <p>all of the beans go here </p>
      {beans.map((bean) => (
        <div>
          <h1>{bean.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Beans
