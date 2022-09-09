import { BASE_URL } from "../globals"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"

const BeanProfile = () => {

  let { beans_id } = useParams()
  console.log(beans_id)  
const [bean, setBean] =useState('')

useEffect((props) => {
  const thisBean = async () => {
    let response = await axios.get(`${BASE_URL}/api/beans/${beans_id}`)
    console.log(response.data)
    setBean(response.data)
  }
  thisBean()
}, [])

  return (
    <div className="baean_profile">
      <h1>{bean.name}</h1>
      <p>Roasted by: {bean.roaster}</p>
      <p>{bean.roast}</p>
      <p>{bean.origin}</p>
      <p>{bean.grind}</p>
      <p>{bean.description}</p>
      <p> Buy Directly from {bean.roaster}</p>
      <a href={bean.buy_link}>
        <button>Buy Now</button>
      </a>
      <p>${bean.price}</p>
      <img className="bean-img" src={bean.image} alt='product image'/>
    </div>
  )
}

export default BeanProfile