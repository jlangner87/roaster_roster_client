import { BASE_URL } from "../globals"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import UpdateDeleteBean from "./UpdateBean"

const BeanProfile = () => {
  let navigate= useNavigate()
  let { beans_id } = useParams() 
  const [bean, setBean] =useState('')

useEffect(() => {
  const thisBean = async () => {
    let response = await axios.get(`${BASE_URL}/api/beans/${beans_id}`)
    setBean(response.data)
  }
  thisBean()
}, [])

const goBack = () => {
  navigate(-1)
}

  return (
    <div className="brewer_profile">
      <div className="bean_container">
      <button onClick={goBack} className="back">🔙</button>
      <h1>{bean.name}</h1>
      <ul className="bean_attributes">
        <li>{bean.roast} Roast</li>
        <li>Origin: {bean.origin}</li>
        <li>{bean.grind}</li>
      </ul>
      <img className="profile_image" src={bean.image} alt='product image'/><br/>
      <p className="bean_descript">{bean.description}</p>
      <p> Buy Directly from the roaster</p>
      <a href={bean.buy_link}>
        <button>Buy Now</button>
      </a>
      <p>${bean.price}</p>
      </div>
      <br></br>
      <UpdateDeleteBean/>
    </div>
  )
}

export default BeanProfile