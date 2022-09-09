import { BASE_URL } from "../../globals"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"

const RoasterCollection = () => {

  let { roaster_id } = useParams() 
  const [beans, setBeans] =useState([{}])

useEffect(() => {
  const thisBean = async () => {
    let response = await axios.get(`${BASE_URL}/api/beans/roaster/${roaster_id}`)
    setBeans(response.data)
    console.log(response.data)
  }
  thisBean()
}, [])

  return (
    <div className="baean_profile">
    <h1 className="page_header">Roaster Collection</h1>
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

export default RoasterCollection